import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './Store/index'
import Test from './components/Test'
import TodoList from './components/Todo'
ReactDOM.render(

<Provider store ={store} >
    <App />
    <Test/>
    <TodoList>this is child in todo</TodoList>
</Provider>

, document.getElementById('root'));
