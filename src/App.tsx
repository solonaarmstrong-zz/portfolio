import React, { Component } from 'react';
import Heading from './components/Heading/Heading';
import {Color, Font} from './types';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading color={Color.Blue} element='h1' font={Font.Montez}>Solona</Heading>
        <Heading color={Color.Black} element='h3' font={Font.Regular}>Front End Web Developer</Heading>
      </div>
    );
  }
}

export default App;
