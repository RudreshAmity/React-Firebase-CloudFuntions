import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'; /* import create store from redux library & appling middleware function && compose is used to combine several store enhancer*/
import rootReducer from './store/reducers/rootReducer';
/* importing provider component which can surround our app and pass the store into the 
application so that the application has access to the store */
import { Provider } from 'react-redux'; // react-redux is the binding layer. This help us to bind redux with our react app
import thunk from 'redux-thunk'; // importing redux thunk and applying middleware inside the store
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { recatReduxFirebase, getFirebase, reduxFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'

const store = createStore(rootReducer,
    compose( 
      applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
      reduxFirestore(fbConfig),
      reduxFirebase(fbConfig)      
     )
); // creating store & applying middleware which enhance our store with extra functionality
//passing the store into the Provider
ReactDOM.render(<Provider store = {store }><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
