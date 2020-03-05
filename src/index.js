import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';

import postReducer from './reducers/postReducer'
import { Provider } from 'react-redux'; //for react app to use redux store we use Provider component provided by react-redux lib and put it as a root of all components. 


const store = createStore(postReducer); //create store using createStore() from redux

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));