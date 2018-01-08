/* eslint no-underscore-dangle: 0 */
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './App';

let reduxState = {};

if (window.__REDUX_STATE__) {
  reduxState = window.__REDUX_STATE__;

  // Allow the passed state to be garbage-collected
  delete window.__REDUX_STATE__;
}

const store = configureStore(reduxState);

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-mount-point'),
);
