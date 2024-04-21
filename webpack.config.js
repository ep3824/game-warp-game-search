const path = require('path');

const SRC_DIR = path.join(__dirname, '/react-client/src');
const DIST_DIR = path.join(__dirname, '/react-client/dist');
const dotenv = require('dotenv');

dotenv.config();
const webpack = require('webpack');

module.exports = {
  mode: 'development', // Explicitly set the mode to development
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
    publicPath: '/', // Set the publicPath to the root, required for webpack-dev-server
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
        },
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin(['RAWG_API_KEY']),
  ],
  devServer: {
    static: {
      directory: DIST_DIR, // Serve your static files from DIST_DIR
    },
    historyApiFallback: true, // Serve index.html for all routes to support SPA
    compress: true, // Enable gzip compression
    port: 4000, // Set the port to listen on
    open: true, // Open the browser after server has been started
    hot: true, // Enable webpack's Hot Module Replacement feature
  },
};
