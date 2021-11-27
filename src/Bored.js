import React from "react";

class Bored extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          boredStuff: {}
        }
    }

    componentDidMount () {
        fetch('http://www.boredapi.com/api/activity/')
        .then(response => response.json())
        .then(boredStuff => 
             {this.setState({boredStuff})} 
             );
    }

    render() {


        return (
          <div className="bored">
            <div>Why Not:</div>
            <div>{this.state.boredStuff.activity} </div>
          </div>
        );
    }
}

export default Bored;