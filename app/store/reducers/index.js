import { combineReducers } from 'redux';
import  toDos  from './todo';
import visibilityFilter from './visibilityFilter';

const toDoApp = combineReducers({
   toDos,
   visibilityFilter
})

export default toDoApp;
