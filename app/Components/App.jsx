import React from 'react';
import PropTypes from 'prop-types';
import { createStore, applyMiddleware } from 'redux';
import { provider } from 'react-redux';
import thunk from 'redux-thunk';
import { ajaxLoadData } from '../shared/utils/utils.js';

import Matrix from './Matrix.jsx';

import Footer from './Footer.jsx';
import AddToDo from '../Containers/AddToDo.jsx';
import VisibleToDoList from '../Containers/VisibleToDoList.jsx';
import './app.scss';

export default class App extends React.Component {


  render() {
    return (
     <div>
      <AddToDo/>
      <VisibleToDoList/>
      <Footer />
      <Matrix />

      

     </div>);
  }
}