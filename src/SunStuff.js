import React from "react";
import "./App.css";
export const MContext = React.createContext(); 



class SunStuff extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: '',
            lon: '',
            timeZone: '',
            offSet: '',
            rise: '',
            set: '',
            daylight: '',
            infoStuff: [],
            sunStuff: []
        }


    }

    componentDidMount() {
        this.loadLocation();

    }

    loadLocation = () => {


        fetch("https://ipgeolocation.abstractapi.com/v1/?api_key=ea1d7320454740359dc3f7321efcdab9")
            .then(res =>
                res.json())
            .then(json_response =>
            //get and set lat, lon, and timezone in order to query the sunrise-sunset api
            {
                console.log(json_response);
                this.setState({ lat: json_response.latitude, lon: json_response.longitude, offSet: json_response.timezone.gmt_offset })
            })
            .then(() => fetch("https://api.sunrise-sunset.org/json?lat=" + this.state.lat + "&lng=" + this.state.lon + "&date=today")
                .then(res =>
                    res.json())
                .then(sunny => {
                    console.log(sunny);
                    this.setState({ sunStuff: sunny.results });
                    this.convertTime();
                    this.convertDaylight();
                }))


    }



    convertTime = () => {
        //function runs in load location
        //times come back in UTC
        //convert to local time

        let sunrise = this.state.sunStuff.sunrise;
        let sunset = this.state.sunStuff.sunset;


        if (sunrise.length === 11) {
            //11=string length the our is 10,11, or 12
            //know that hours is 2 digit number
            let hour = parseInt(sunrise.substr(0, 2));
            //get hour, then convert using the offset grabbed from creepy geo API
            hour += this.state.offSet;
            let recalcHour = hour + sunrise.substr(2, 3) + ' AM';

            this.setState({ rise: recalcHour });
        }
        else {
            //hour is only 1 digit
            let hour = parseInt(sunrise.substr(0, 1));
            hour += this.state.offSet;
            let recalcHour = hour + sunrise.substr(1, 3) + ' AM';
            this.setState({ rise: recalcHour });
        }
        if (sunset.length === 11) {
            //know that hours is 2 digit number
            let hour = parseInt(sunset.substr(0, 2));
            //get hour, then convert to local time using the offset grabbed from creepy geo API
            hour += this.state.offSet;
            let recalcHour = hour + sunset.substr(2, 3) + ' PM';

            this.setState({ set: recalcHour });
        }
        else {
            let hour = parseInt(sunset.substr(0, 1));
            hour += this.state.offSet;
            let recalcHour = hour + sunset.substr(1, 3) + ' PM';
            this.setState({ set: recalcHour });
        }


    }

    convertDaylight = () => {
        //format the hours of daylight to display nicely
        //function runs in load location
        let hours = this.state.sunStuff.day_length;

        if (hours.substr(0, 1) === '0'){
            let day = hours.substr(1, 7);
        
            this.setState({daylight: day});
        }
        else {
            let day = hours.substr(1, 8)
            this.setState({daylight: day});
        }
        
    }


    render() {




        return (
            <div>
                <div >sunrise: {this.state.rise}</div>
                <div >sunset: {this.state.set}</div>
                <div> day length: {this.state.daylight}</div>
            
            <MContext.Provider value={
            {   state: this.state,
                setLat: (lat) => this.setState({
                            lat: lat })}}>
            {this.props.children}   
            </MContext.Provider>)
            </div>

        )

    }

}
export default SunStuff;