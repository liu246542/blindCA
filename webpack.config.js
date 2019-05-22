/*
author:rujia
website:www.rujia.uk
version:1.0
*/

const path = require('path');

module.exports = {
  entry: {
    genpk: './unpack/genpk.js',
    trace: './unpack/trace.js',
  },
  output: {
    path: path.resolve(__dirname, './static/js/'),
    filename: '[name].js'
  }
  // module: {
  //   rules: [
  //     { 
  //       test: /\.json$/, use: 'json-loader'
  //     },
  //     {
  //       test: /\.js$/,
  //       exclude: /(node_modules|bower_components)/,
  //       loader: 'babel-loader',
  //       query: {
  //         presets: ['es2015'],
  //         plugins: ['transform-runtime']
  //       }
  //     }
  //   ]
  // }
}