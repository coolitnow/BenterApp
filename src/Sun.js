import React from "react";
import "./App.css";
import SunStuff from "./SunStuff";

class Sun extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            visibility: 'visible'
        }
        this.sunGone = this.sunGone.bind(this)
    }
    
    sunGone = () => {
        if (this.state.visibility === 'hidden'){
            console.log(this.state.visibility);
            this.setState({visibility: 'visible'});}
        else if (this.state.visibility === 'visible')
            this.setState({visibility: 'hidden'});
    }

    sunBack = () => {
        this.setState({visibility: 'visible'});
    }
   


    render() {
        const sunWhere = {
            visibility: this.state.visibility
        }


        return (
                <div className='Sun-stuff'>
                <div  id="sun" className="sun" onClick={this.sunGone} style={sunWhere}>
                </div>
                <SunStuff />
                </div>
         
        );
    }
}

export default Sun;