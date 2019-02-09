import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.sass';

function getCustomClass(props) {
    return 'btn '+props.variant;
}

//style={{marginRight: spacing + 'em'}}

var buttonStyle = (props) => {
    return {
        padding: props.padding
    }
};

export class Button extends Component {
    render() {
        return (
            <button
                className={getCustomClass(this.props)}
                style={buttonStyle(this.props)}
                onClick={this.props.onPress}
                disabled={!this.props.active}>{this.props.children}
            </button>
        );
    }
}

Button.propTypes = {
    active: PropTypes.bool,
    position: PropTypes.string,
    variant: PropTypes.string,

    bgColor: PropTypes.string,
    bgOpacity: PropTypes.number,
    buttonColor: PropTypes.string,

    padding: PropTypes.string,
    onPress: PropTypes.func,
};

Button.defaultProps = {
    active: false,
    position: "right",
    variant: "primary",

    bgColor: "transparent",
    bgOpacity: 1,
    buttonColor: "rgba(0,0,0,1)",

    padding: '10px',
    onPress: () => {}
};