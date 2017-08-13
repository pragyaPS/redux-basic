import React from 'react';
import PropTypes from 'prop-types';

const Link = ({active, children, onClick}) => {
    
    if(active){
        return <span> { children } </span>
    }
    return (
        <a onClick={ onClick } > { children } </a>
    )
} 
Link.PropTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}


export default Link;
