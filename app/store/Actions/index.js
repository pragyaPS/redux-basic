import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO, REMOVE_TODO } from '../../shared/constants';

let nextToDoId = 0;

export const addToDo = text => ({
    type: ADD_TODO,
    id: nextToDoId++,
    text
});

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
});

export const toggleToDo = id => ({
    type: TOGGLE_TODO,
    id
});

export const removeTodo = id => ({
    type: REMOVE_TODO,
    id
});