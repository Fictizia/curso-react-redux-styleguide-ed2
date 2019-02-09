import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.sass';

function getCustomClass(props) {
    return 'btn '+props.variant;
}

//style={{marginRight: spacing + 'em'}}

var buttonStyle = (props) => {
    return {
        padding: props.padding,
        float: props.position,
        opacity: props.opacity
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
    opacity: PropTypes.float,
    padding: PropTypes.string,
    onPress: PropTypes.func,
};

Button.defaultProps = {
    active: false,
    position: "left",
    variant: "primary",
    opacity: "0.5",
    padding: '10px',
    onPress: () => {}
};