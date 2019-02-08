import React, { Component } from 'react';
import './App.css';
import { Jumbotron } from "./components/jumbotron/Jumbotron";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Jumbotron message="Funciona!"/>
        </header>
      </div>
    );
  }
}

export default App;
