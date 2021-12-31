import React from "react";
import "./App.css";





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
        fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Pittsburgh?unitGroup=us&key=XWCFHQE7CRBLM99NWZR2QLTF2&include=current"
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
            {this.setState({moonSentence: 'NEW MOOOON!!!!', picOfMoonUrl: "https://i.ibb.co/yQDF8Lk/newmoon.png"})}

        else if(0.0 < moonDouble && moonDouble < 0.25)
            this.setState({moonSentence: 'Waxing Crescent', picOfMoonUrl: "https://i.ibb.co/C8Nh35n/waningcres.png"})
            //the moon phases were mislabeled, this png is actually of a waxing cresc

        else if (moonDouble === 0.25) 
            this.setState({moonSentence: 'First Quarter', picOfMoonUrl: "https://i.ibb.co/dJgB3qC/firstQ.png"})
        else if (0.25 < moonDouble && moonDouble < 0.5)  
            this.setState({moonSentence: 'Waxing Gibbous', picOfMoonUrl: "https://i.ibb.co/xfxxD6b/waxinggib.png"})
        else if (moonDouble === .5)
            this.setState({moonSentence: 'FULL MOOOOOOON!!!', picOfMoonUrl: "https://i.ibb.co/9ypTJvg/full.png"})
        else if (0.5 < moonDouble && moonDouble < 0.75)
            this.setState({moonSentence: 'Waning Gibbous', picOfMoonUrl: "https://i.ibb.co/TvL9X1M/waninggib.png"})
        else if (moonDouble === 0.75)
            this.setState({moonSentence: 'Third Quarter', picOfMoonUrl: "https://i.ibb.co/QcWhVj5/thirdQ.png"})
        else if (0.75 < moonDouble && moonDouble < 1.0){
            this.setState({moonSentence: 'Waning Crescent', picOfMoonUrl: "https://i.ibb.co/cgGpzZF/waxingcres.png"});
            //this actually a pic of waning cresc
           };
        
        
        console.log(this.state.picOfMoonUrl)

        return (this.state.moonSentence);
            
    }



    render() {
        


        return(
            <div className="lunarContainer">
            <div className="lunarStyle">
                <img src={this.state.picOfMoonUrl} alt={this.state.moonSentence}/>
            </div>
            </div>
        )
    }
}

export default MoonPhase;