import React from "react";
import "./App.css";
import MoonStuff from "./MoonStuff";
import MContext from "./SunStuff";



class MoonPhase extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            moonInformation: {}
        }
    }

    componentDidMount() {
        this.loadMoon();
    }

    loadMoon() {
        fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK/next5days?unitGroup=us&key=XWCFHQE7CRBLM99NWZR2QLTF2"
            )
        .then(res => res.json())
        .then(response => {
            this.setState({moonInformation: response})
            console.log(this.state.moonInformation)
            });
    }
    
    convertMoonPhase() {

    }


    render() {


        return(
            <div>
                
            </div>
        )
    }
}

export default MoonPhase;