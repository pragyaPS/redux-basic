import React from 'react';
import PropTypes from 'prop-types';

const RemoveButton = ({removeTodoClick}) => (
    <a className="remove-button" onClick= { removeTodoClick } >X</a>
)

const Todo = ({onClick, completed, text, removeTodoClick}) => (
    <li onClick = { onClick } > 
        <span style = { {textDecoration: completed ? 'line-through' : 'none' }}>{ text } </span>
        <RemoveButton removeTodoClick={ removeTodoClick }/>
         </li>
);

Todo.PropTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    removeTodoClick: PropTypes.func.isRequired
}

export default Todo;
