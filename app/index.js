import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { createStore } from 'redux';
import App from './Components/App.jsx';
import toDoApp from './store/reducers/index.js'

const store = createStore(toDoApp);


ReactDOM.render(<Provider store={ store }>
    <App />
</Provider>
, document.getElementById('react-container'));