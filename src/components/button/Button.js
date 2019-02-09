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
    /** Especifica si el botón estará activo */
    active: PropTypes.bool,
    /** Especifica la posición flotante del botón */
    position: PropTypes.string,
    /** Especifica si el botón es primario o secundario */
    variant: PropTypes.string,
    /** Indica la opacidad del botón */
    opacity: PropTypes.float,
    /** Indica el padding para aumentar el tamaño del botón */
    padding: PropTypes.string,
    /** Añade una acción para el botón */
    onPress: PropTypes.func,
};

Button.defaultProps = {
    active: false,
    position: "left",
    variant: "primary",
    opacity: "1",
    padding: '10px',
    onPress: () => {}
};