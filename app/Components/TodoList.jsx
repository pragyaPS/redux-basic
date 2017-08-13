import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo.jsx';

const TodoList = ({todos, onTodoClick}) => {
   if( todos.length) {
    return <ul>
    { 
        todos.map(todo => (
            <Todo key = { todo.id } onClick={ () => onTodoClick(todo.id) } {...todo}/>
        )  )
     }  
    </ul>
    }
    return <div>No todos available for this filter.</div>;
   
    
};

TodoList.PropTypes = {
    todos: PropTypes.array.isRequired,
    onTodoClick: PropTypes.func.isRequired
}
export default TodoList;