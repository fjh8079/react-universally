/* eslint-disable no-console */
import React from 'react';
import express from 'express';
import webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import webpackConfig from '../webpack.config.dev';
import configureStore from './clients/store/configureStore';
import { renderDefaultLayout } from './server';
import App from './clients/App';

const app = express();

const {
  PORT = 3000,
  NODE_ENV = 'development',
} = process.env;

if (NODE_ENV !== 'production') {
  const compiler = webpack(webpackConfig);
  app.use(WebpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));
  app.use(WebpackHotMiddleware(compiler));
} else {
  app.use('/build', express.static('build'));
}

// serve static files
app.use('/assets', express.static('assets'));

function handleRender(req, res) {
  const initialState = {};

  // Create a new Redux store instance
  const store = configureStore(initialState);

  const providerContent = (
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Render the component to a string
  const html = renderToString(providerContent);

  // Grab the initial state from our Redux store
  const preloadedState = store.getState();

  // Send the rendered page back to the client
  res.send(renderDefaultLayout(html, preloadedState));
}

// This is fired every time the server side receives a request
app.use(handleRender);

const server = app.listen(PORT, () => {
  const { port, address: host } = server.address();

  console.log('React Server is listening on http://%s:%s', host, port);
});
