import React, { Component } from 'react';
import './modal.css';

export default class Modal extends Component {

  render() {
    if(!this.props.show){
      return null;
    }
    return (
    <div class="modal">
      <div class="modal-back"></div>
      <div className="modal__content">
        {this.props.children}
      </div>
    </div>)
    ;
  }
}