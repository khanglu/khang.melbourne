import React, { Component } from 'react';
import pokeball_image from './pokeball.svg';
import './pokeball.css'

class Pokeball extends Component {
  render() {
    return (
      <div>
        <img className="pokeball" src={pokeball_image} alt="spinning pokeball"/>
      </div>
    )
  }
}

export default Pokeball;
