import React from "react";
import "./App.css";
export const MContext = React.createContext();



class MoonStuff extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: '',
            lon: '',
            timeZone: '',
           
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
                this.setState({ lat: json_response.latitude, lon: json_response.longitude})
            })

    }

    render() {
        const latitude = this.state.lat;
        const longitude = this.state.lon;


        return (
            <div>
              <div> {latitude} </div>
              <div> {longitude} </div>

            </div>

        )

    }

}
export default MoonStuff;