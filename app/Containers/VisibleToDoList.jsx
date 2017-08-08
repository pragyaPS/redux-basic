import { connect } from 'react-redux';
import { toggleToDo } from '../store/Actions/index.js';
import { TodoList } from '../Components/TodoList.jsx'; 
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../shared/constants';

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case SHOW_ALL: 
            return todos;
        case SHOW_COMPLETED:
            return todos.filter( todo => todo.completed );
        case SHOW_ACTIVE: 
            return todos.filter( todo => !todo.completed );
    }
}

const mapStateToProps = (state) => 
   ({ 
       todos: getVisibleTodos(state.todos, state.visibilityFilter)
   })

const mapDispatchToProps = (dispatch) => (
    {
        onTodoClick: dispatch(toggleToDo(id))
    }
)
const VisibleToDoList = connect(mapStateToProps,mapDispatchToProps)(TodoList);
export default VisibleToDoList;