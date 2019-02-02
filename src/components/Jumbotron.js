import React, { Component } from 'react';

export class Jumbotron extends Component {
    render() {
        return (<div style={{backgroundColor: "grey"}}>
            <h1>{this.props.message}</h1>
        </div>);
    }
}