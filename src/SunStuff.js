import React from "react";
import "./App.css";
import "./Coords";


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
                }))


    }



    convertTime = () => {
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
            //get hour, then convert using the offset grabbed from creepy geo API
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




    render() {



        return (
            <div className="Sun-stuff">
                <div id="sun" className="sun">
                    <div id="rings">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div>sunrise: {this.state.rise}</div>
                <div>sunset: {this.state.set}</div>
            </div>

        )

    }

}
export default SunStuff;