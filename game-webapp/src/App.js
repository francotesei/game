import React, { Component } from 'react';
import './App.css';
import Screen from  './Screen';
import api from "./api.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Screen/>
        </header>
      </div>
    );
  }
}
export default App;
