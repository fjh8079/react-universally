/* eslint no-underscore-dangle: 0 */
import React from 'react';
import { hydrate, render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, browserHistory } from 'react-router-dom';
import configureStore from './store/configureStore';
import MainRoute from './route/index';

let reduxState = {};

if (window.__REDUX_STATE__) {
  reduxState = window.__REDUX_STATE__;

  // Allow the passed state to be garbage-collected
  delete window.__REDUX_STATE__;
}

const store = configureStore(reduxState);
const renderMethod = module.hot ? render : hydrate;

renderMethod(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <MainRoute />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app-mount-point'),
);
