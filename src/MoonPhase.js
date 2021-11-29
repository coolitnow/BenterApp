import React from "react";
import "./App.css";
import MoonStuff from "./MoonStuff";
import MContext from "./SunStuff";



class MoonPhase extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            moonInformation: {},
            moonPhase: '',
            moonSentence: ''
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
            this.setState({moonSentence: this.convertMoonPhase()});

            });
    }
    

    convertMoonPhase() {
        var moonDouble = parseFloat(this.state.moonInformation.days[1].moonphase);
        console.log(moonDouble);
        if(moonDouble === 0.0) 
            this.setState({moonSentence: 'NEW MOOOON!!!!'}) 
        else if(0.0 < moonDouble && moonDouble < 0.25)
            this.setState({moonSentence: 'Waxing Crescent'})
        else if (moonDouble === 0.25) 
            this.setState({moonSentence: 'First Quarter'})
        else if (0.25 < moonDouble && moonDouble < 0.5)  
            this.setState({moonSentence: 'Waxing Gibbous'})
        else if (moonDouble === .5)
            this.setState({moonSentence: 'FULL MOOOOOOON!!!'})
        else if (0.5 < moonDouble && moonDouble < 0.75)
            this.setState({moonSentence: 'Waning Gibbous'})
        else if (moonDouble === 0.75)
            this.setState({moonSentence: 'Third Quarter'})
        else if (0.75 < moonDouble && moonDouble < 1.0)
            this.setState({moonSentence: 'Waning Crescent'})
        
        return (this.state.moonSentence);
            
    }


    render() {


        return(
            <div>
                {this.state.moonSentence}
            </div>
        )
    }
}

export default MoonPhase;