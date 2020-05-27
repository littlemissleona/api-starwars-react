import React, {Component} from 'react';
import './App.css';
import clipart from './img/starwars-clipart-stormtrooper-16.png';

class App extends Component{
  state = {
    quote: "",
  }
  componentDidMount(){
    this.handleFetchRequest();
  }
  handleFetchRequest = () => {
    fetch("https://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote")
      .then(res => res.json())
      .then(data => this.setState({quote: data.starWarsQuote}))
  }
  //original link: http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote
  render(){
    return(
      <div className = "App">
        <h1>Star Wars</h1>
        <img 
          src = {clipart} 
          alt="star wars"
          />
        <hr/>
        <button onClick = {this.handleFetchRequest}>new quote</button>
        <hr />
        <h2>{this.state.quote && this.state.quote.toLowerCase()}</h2>
      </div>
    )
  }
}

export default App;
