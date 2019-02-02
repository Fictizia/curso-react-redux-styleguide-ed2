import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Jumbotron extends Component {
    render() {
        return (<div style={{backgroundColor: "lightgrey", padding: 20}}>
            <h1>{this.props.message}</h1>
        </div>);
    }
}

Jumbotron.propTypes = {
    /** Jumbotron inner message */
    message: PropTypes.string.required
  };

Jumbotron.defaultProps = {
    message: ""
  }
  