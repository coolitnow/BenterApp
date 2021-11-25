

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      duneQuotes: []
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
      .then (json_response =>
          this.setState({duneQuotes: json_response}));
    
  }
  
  render() {
    let showQuote = [];
    for(let i = 0; i < this.state.duneQuotes.length; i++)
    {
      showQuote.push(<li>{this.state.duneQuotes[i].quote}</li>)
    }

    return (
      <div className="App">
        Put quotes here
        {showQuote}
      </div>
    );
  }
}

export default App;

