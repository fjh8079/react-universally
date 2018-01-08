const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'eval',
  entry: {
    bundle: [
      'webpack-hot-middleware/client', // 跟server端確認什麼更新了 我要更新什麼
      './src/clients',
    ],
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/build/',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(), // 排序輸出
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
    ],
  },
};
