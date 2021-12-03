import React from "react";
import "./App.css";
import DuneQ from "./DuneQ";

class Axolotl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cutePic: ''
        }
    }

    componentDidMount()
    {
        this.loadAxos();

    }

    loadAxos() {
        //create cors-anywhere website via heroku in order to access axolotl api
        //put that address in front of the axolotlapi address
        //some APIs only allow real websites to access their info, so this is a way around that for testing and what not
        fetch("https://secure-brook-34239.herokuapp.com/https://axoltlapi.herokuapp.com/")
        .then(res =>
            res.json())
        .then(json_response =>
            this.setState({cutePic: json_response.message}));
    }

    render(){
         


        return (
            <div className="DuneQ-Container">

            <div className="AxlContainer">
            <img src={this.state.cutePic} alt="Axolotl Pic" className="AxlPic"/> 
            <DuneQ />
            </div>
            </div>
        )
        
    }
    
}

export default Axolotl;