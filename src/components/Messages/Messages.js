import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.type
    }
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      type: nextProps.type
    })
  }

  render() {

    const Error = styled.div`
      min-width: 300px;
      height: 100px;
      line-height: 100px;
      font-size: 25px;
      text-align:center;
      background-color: red;
      color: white;
      margin-top: 50px;
      padding: 0 20px;
    `
    const Success = styled.div`
      min-width: 300px;
      height: 100px;
      line-height: 100px;
      font-size: 25px;
      text-align:center;
      background-color: green;
      color: white;
      margin-top: 50px;
      padding: 0 20px;
    `
    const Question = styled.div`
      min-width: 300px;
      height: 100px;
      line-height: 100px;
      font-size: 25px;
      text-align:center;
      background-color: lightblue;
      color: white;
      margin-top: 50px;
      padding: 0 20px;
    `

    const state = this.state;
    switch (state.type) {
      case "error":
        return (
          <Error>Se ha producido un error chungo</Error>
        )
        // break; ! Unreachable code
      case "success": 
        return (
          <Success>Todo ha ido bien</Success>
        )
        // break;
      case "question":
        return (
          <Question>¿Necesitas ayuda?</Question>
        )
        // break;
      default: 
          return null;
    }

  }
}

Message.propTypes = {
  /** El tipo de mensaje que queremos mostrar en pantalla: */
  type: PropTypes.oneOf(['error', 'success', 'question'])
}

Message.defaultProps = {
  type: "No se renderizará nada"
}