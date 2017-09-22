import { connect } from 'react-redux';
import { toggleToDo, removeTodo } from '../store/Actions/index';
import  TodoList  from '../Components/TodoList.jsx'; 
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../shared/constants';

const getVisibleTodos = (toDos, filter) => {
    switch(filter) {
        case SHOW_ALL: 
            return toDos;
        case SHOW_COMPLETED:
            return toDos.filter( todo => todo.completed );
        case SHOW_ACTIVE: 
            return toDos.filter( todo => !todo.completed );
    }
}

const mapStateToProps = (state) => 
   ({ 
       todos: getVisibleTodos(state.toDos, state.visibilityFilter)
   })

const mapDispatchToProps = (dispatch) => (
    {
        onTodoClick: id => { dispatch(toggleToDo(id))},
        removeTodoClick: id => { dispatch(removeTodo(id)) }
    }
)

const VisibleToDoList = connect(mapStateToProps,mapDispatchToProps)(TodoList);
export default VisibleToDoList;