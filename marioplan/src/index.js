import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'; /* import create store from redux library */
import rootReducer from './store/reducers/rootReducer';
/* importing provider component which can surround our app and pass the store into the 
application so that the application has access to the store */
import { Provider } from 'react-redux' // react-redux is the binding layer. This help us to bind redux with our react app


const store = createStore(rootReducer); // creating store
//passing the store into the Provider
ReactDOM.render(<Provider store = {store }><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
