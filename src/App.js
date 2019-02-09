import React, { Component } from 'react';
import './App.css';
import { Jumbotron } from "./components/jumbotron/Jumbotron";
import { Message } from "./components/Messages/Messages";
import { Card } from "./components/Card/Card";

class App extends Component {
  constructor() {
    super();
    this.state = {
      messageType: ""
    }
  }

  handleSelectorChange = () => {
    const value = document.getElementById("selector").value;
    this.setState({
      messageType: value
    })
  }

  render() {
    const state = this.state;
    return (
      <div className="App">
        <header className="App-header">
            <Jumbotron message="Funciona!"/>
            <h4>Prueba mensajes de interfaz:</h4>
            <select id="selector" onChange={()=> this.handleSelectorChange()}>
              <option value="error">Error</option>
              <option value="success">Éxito</option>
              <option value="question">Pregunta</option>
            </select>
            <Card />
            <Message type={state.messageType}></Message>
            {/* <Message type="error"></Message>
            <Message type="success"></Message>
            <Message type="question"></Message> */}
        </header>
      </div>
    );
  }
}

export default App;
