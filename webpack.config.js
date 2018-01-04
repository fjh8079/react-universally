const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const publicPath = '/dist/build/';

module.exports = {
  // Content
  entry: './src/server/index.js',
  // A SourceMap without column-mappings ignoring loaded Source Maps.
  devtool: 'cheap-module-source-map',
  plugins: [
    /**
     * simplifies creation of HTML files to serve your webpack bundles.
     * This is especially useful for webpack bundles
     * that include a hash in the filename which changes every compilation.
     * You can either let the plugin generate an HTML file for you,
     * supply your own template using lodash templates or use your own loader.
     */
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
    }),
    // Auto replacement of page when i save some file, even css
    new webpack.HotModuleReplacementPlugin(),
  ],

  output: {
    path: path.join(__dirname, publicPath),
    filename: '[name].bundle.js',
    publicPath,
    sourceMapFilename: '[name].map',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '*'],
  },

  devServer: {
    port: 3000,
    host: 'localhost',
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    publicPath,
    contentBase: path.join(__dirname, publicPath),
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/, use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ['babel-loader'],
      }],
  },
};
