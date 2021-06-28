import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './Store/index'
import Test from './components/Test'
ReactDOM.render(

<Provider store ={store} >
    <App />
    <Test/>
</Provider>

, document.getElementById('root'));
