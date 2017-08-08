import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo.jsx';

const TodoList = (todos, onTodoClick) => (
    <ul>
    {todos.length && (
        todos.map(todo => (
            <Todo key = { todo.id } onClick={ onTodoClick } text= { todo.text }/>
        )  )
    ) }  
    </ul>
);

TodoList.PropTypes = {
    todos: PropTypes.array.isRequired,
    onTodoClick: PropTypes.func.isRequired
}
export default TodoList;