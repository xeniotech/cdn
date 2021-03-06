var path = require('path');
var webpack = require('webpack');
var nodeModulesPath = path.join(__dirname, 'node_modules');
var bowerComponentsPath = path.join(__dirname, 'bower_components');
var AssetsPlugin = require('assets-webpack-plugin');
var assetsPluginInstance = new AssetsPlugin();

module.exports = {
  entry: {
    app: ['./src/vendor/vendor.js']
  },
  output: {
    path: __dirname + "/dist",
    filename: 'care-vendor.js'
  },
  module: {
    loaders: [
      {test: /jquery\.js$/, loader: "exports?jQuery!script"},
      {test: /moment.min\.js$/, loader: "exports?moment!script"},
      {test: /numeral\.js$/, loader: "exports?numeral!script"},
      {test: /\.js$/, exclude: /node_modules|bower_components/, loader: 'babel-loader'},
      {test: /\.handlebars$/, loader: 'handlebars-loader'},
      {test: /\.less$/, loader: "style!css!less"},
      {test: /\.css$/, loader: "style!css"},
      {test: /\.(otf|eot|ttf|woff|woff2)/, loader: "file-loader?limit=10000&minetype=application/font-woff"},
      {test: /\.(png|gif|svg|jpg)/, loader: "file-loader"}
    ],
    noParse: []
  },
  resolve: {
    root: [
      nodeModulesPath,
      bowerComponentsPath],
    alias: {
      "jquery$": "jquery/dist/jquery.js"
    },
    extensions: ['',
      '.js',
      '.css']
  },
  bail: true,
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.ProvidePlugin({
      $: "jquery"
    }),
    assetsPluginInstance
  ]

};