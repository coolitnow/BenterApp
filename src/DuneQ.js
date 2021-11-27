

import React from 'react';
import './App.css';


class DuneQ extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      singleQ: ''
    }

  }

  componentDidMount()
  {
    // this runs once this page has loaded
    // this only runs once, unlike the constructor that runs twice, for whatever reason
    this.loadDuneQuotes();
  }

  loadDuneQuotes() {
    // go to that url
    // get the results
    // put them into this.state.movie_library

    fetch("https://the-dune-api.herokuapp.com/quotes")
      .then(res =>
        res.json())
      .then (duneQuotes =>
        {this.setState({singleQ: duneQuotes[0].quote})} 
        );;
  }
  
  render() {

    return (
        <div className="DuneQ">
            {this.state.singleQ}
        </div>  
    );
  }
}

export default DuneQ;

