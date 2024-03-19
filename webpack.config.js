var path = require('path');
var SRC_DIR = path.join(__dirname, '/react-client/src');
var DIST_DIR = path.join(__dirname, '/react-client/dist');
const dotenv = require('dotenv');
dotenv.config();
const webpack = require('webpack');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    rules : [ 
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        options: { 
          presets: ['react', 'es2015']
       }
      }
    ]
  },
  plugins: [

    new webpack.EnvironmentPlugin(['RAWG_API_KEY']),
]
};