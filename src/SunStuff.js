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

            infoStuff: [],
            sunStuff: []
        }

        //this.loadSun = this.loadSun.bind(this);
        //this.loadLocation = this.loadLocation.bind(this)
    }

     componentDidMount() {
        this.loadLocation();
        //this.loadSun();
    }

    loadLocation = () => {


        fetch("https://ipgeolocation.abstractapi.com/v1/?api_key=ea1d7320454740359dc3f7321efcdab9")
            .then(res =>
                res.json())
            .then(json_response =>
                //get and set lat, lon, and timezone in order to query the sunrise-sunset api
                this.setState({lat: json_response.latitude, lon: json_response.longitude, timeZone: json_response.timezone.abbreviation}))
            .then(() => fetch("https://api.sunrise-sunset.org/json?lat=" + this.state.lat + "&lng=" + this.state.lon + "&date=today")
            .then(res =>
                res.json())
            .then(sunny =>
                this.setState({ sunStuff: sunny.results })))
            .then()

    }

convertTime = () => {
    //make hash of timezones' offsets from UTC
    //if EST = -7
    //setState(offSet = )
    let timeZoneHash = {};
    timeZoneHash['EST'] = -5;
    console.log(timeZoneHash['EST']);
}


// loadSun() {
//         fetch("https://api.sunrise-sunset.org/json?lat=" + this.state.lat + "&lng=" + this.state.lon + "&date=today")
//             .then(res =>
//                 res.json())
//             .then(sunny =>
//                 console.log({ sunStuff: sunny.results }))
            
            
//     }

    render() {
        
        
        return (
            <div className="Sun-stuff">
                <div>sunrise: </div>
                <div>sunset: </div>
            </div>
        )

    }

}
export default SunStuff;