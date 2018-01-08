import express from 'express';
import webpack from 'webpack';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

const app = express();

const {
  PORT = 3000,
  NODE_ENV = 'development',
} = process.env;

function renderLayout() {
  return `
    <!doctype html>
    <html>
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body>
        <div id="app-mount-point"></div>
        <script src="/build/bundle.js"></script>
      </body>
    </html>
  `;
}

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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('*', (req, res) => {
  res.send(renderLayout());
});

const server = app.listen(PORT, () => {
  const { port, address: host } = server.address();

  console.log('React Server is listening on http://%s:%s', host, port); // eslint-disable-line
});
