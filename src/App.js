import React, { Component } from 'react';
import Pokeball from './pokeball/Pokeball';
import logo from './logo.svg';
import './fonts/font.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="landing-page">
          <Pokeball />
          <h2>How to fit React inside a Pokéball?</h2>
        </div>
      </div>
    );
  }
}

export default App;
