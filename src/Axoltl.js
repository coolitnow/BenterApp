import React from "react";
import "./App.css";
import "./DuneQ";
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
        fetch("https://secure-brook-34239.herokuapp.com/https://axoltlapi.herokuapp.com/")
        .then(res =>
            res.json())
        .then(json_response =>
            this.setState({cutePic: json_response.url}));
    }

    render(){
         


        return (
            <div className="AxlContainer">
            <img src={this.state.cutePic} alt="Axolotl Pic" className="AxlPic"/> 
            <DuneQ />
            </div>
        )
        
    }
    
}

export default Axolotl;