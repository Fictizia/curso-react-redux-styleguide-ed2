import React, { Component } from 'react';
import './App.css';
import { Jumbotron } from "./components/jumbotron/Jumbotron";
import { Message } from "./components/Messages/Messages";
import { Card } from "./components/Card/Card";
import Avatar  from "./components/Avatar/Avatar";
import { Button } from "./components/button/Button";
import  Modal from "./components/Modal";

class App extends Component {
constructor (props){
  super (props);
  this.state= {show: false}
}
  render() {
    return (
      <div className="App">
        <Message type="error"/>
        <Avatar photo={"https://avatars2.githubusercontent.com/u/7150812?s=460&v=4"} shape="square" size="medium"></Avatar>
       
        <Card  srcImage="https://avatars2.githubusercontent.com/u/7150812?s=460&v=4" width="3000px" paragraph="no se como funciona" title="Curso React" subtitle="Fictizia"></Card>
        <Button
        variant="primary"
        active={true}
        padding='50px'
        onPress={() => this.setState({show: !this.state.show})}>Click me!</Button>
          <Modal onClick={() => this.setState({show: false})} show={this.state.show}>
    Lo que quieras dentro Lo que quieras dentro Lo que quieras dentro Lo que quieras dentro Lo que quieras dentro
    <Button  active={true} className="close" onPress={() => this.setState({show: false})}>
      Close
      </Button>
  </Modal>
      </div>
    );
  }
}

export default App;
