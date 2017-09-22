import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
    <button onClick={props.onClick}>{props.children}</button>
)

Button.PropTypes = {
    onClick: PropTypes.func
}
export default Button;