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
        //without conditional, does not work
        if (this.state.visibility === 'hidden'){
            console.log(this.state.visibility);
            this.setState({visibility: 'visible'});}
        //this does not work yet
        else if (this.state.visibility === 'visible')
            this.setState({visibility: 'hidden'});
    }
    
   


    render() {
        const sunWhere = {
            visibility: this.state.visibility
        }

        //made SunStuff the child of Sun to eliminate multiple API requests
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