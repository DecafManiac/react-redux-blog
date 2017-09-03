import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'

import reducers from './reducers';
import App from './components';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(logger, thunk)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <App />
   </Provider>
   , document.getElementById('root')
);
