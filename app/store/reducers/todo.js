import { ADD_TODO, TOGGLE_TODO } from '../../shared/constants';

const toDos = (state = [], action) => {
    switch (action) {
        case ADD_TODO: 
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO: 
            return state.map( todo => (todo.id === action.id 
                                        ? { ...todo, completed: !todo.completed }
                                        : todo ));
        
        default :
            return state;
        }

}

export default toDos;
