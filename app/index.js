import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { createStore } from 'redux';
import App from './Components/App.jsx';
import toDoApp from './store/reducers/index.js';
import {addToDo} from './store/Actions/index.js';


const store = createStore(toDoApp,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log('toDoApp', toDoApp);
window.store = store;
store.dispatch(addToDo("sdsdd"));

ReactDOM.render(<Provider store={ store }>
    <App />
</Provider>
, document.getElementById('react-container'));