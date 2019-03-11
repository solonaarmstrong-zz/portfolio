import React, { Component } from 'react';
import Heading from './components/Heading/Heading';
import {Color} from './types';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading color={Color.Black} element='h1'>Solona Armstrong</Heading>
      </div>
    );
  }
}

export default App;
