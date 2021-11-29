import React from "react";
import "./App.css";
import MoonStuff from "./MoonStuff";





class MoonPhase extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            moonInformation: {},
            moonPhase: '',
            moonSentence: '',
            picOfMoonUrl: {},
            moons: []
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
            console.log(response)
            this.setState({moonInformation: response})
            this.setState({moonSentence: this.convertMoonPhase()});

            });
    }
    

    convertMoonPhase() {
        var moonDouble = parseFloat(this.state.moonInformation.days[1].moonphase);
        let path = ''
        console.log(moonDouble);
        if(moonDouble === 0.0) 
            {this.setState({moonSentence: 'NEW MOOOON!!!!', picOfMoonUrl: "https://i.ibb.co/pJwS3ZP/newmoon.jpg"})}

        else if(0.0 < moonDouble && moonDouble < 0.25)
            this.setState({moonSentence: 'Waxing Crescent', picOfMoonUrl: "https://i.ibb.co/2tdWhs4/wc.jpg"})

        else if (moonDouble === 0.25) 
            this.setState({moonSentence: 'First Quarter', picOfMoonUrl: "https://i.ibb.co/XsjyYdy/oneq.jpg"})
        else if (0.25 < moonDouble && moonDouble < 0.5)  
            this.setState({moonSentence: 'Waxing Gibbous', picOfMoonUrl: "https://i.ibb.co/LNQF8Sy/wg.jpg"})
        else if (moonDouble === .5)
            this.setState({moonSentence: 'FULL MOOOOOOON!!!', picOfMoonUrl: "https://i.ibb.co/DRWHP3g/fullCage.png"})
        else if (0.5 < moonDouble && moonDouble < 0.75)
            this.setState({moonSentence: 'Waning Gibbous', picOfMoonUrl: "https://i.ibb.co/HY7yKfS/wangib.jpg"})
        else if (moonDouble === 0.75)
            this.setState({moonSentence: 'Third Quarter', picOfMoonUrl: "https://i.ibb.co/M28v5rK/thirdq.jpg"})
        else if (0.75 < moonDouble && moonDouble < 1.0){
            this.setState({moonSentence: 'Waning Crescent', picOfMoonUrl: "https://i.ibb.co/9N9ZzkV/wancres.jpg"});
           };
           
        
            
        
        
        console.log(this.state.picOfMoonUrl)

        return (this.state.moonSentence);
            
    }


    render() {
        


        return(
            <div>
           <img  src={this.state.picOfMoonUrl} />
            </div>
        )
    }
}

export default MoonPhase;