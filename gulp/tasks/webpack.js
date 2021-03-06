var path = require('path'),
  gulp = require('gulp'),
  webpack = require('webpack'),
  gulpWebpack = require('gulp-webpack-build'),
  CONFIG_FILENAME = gulpWebpack.config.CONFIG_FILENAME,
  config = require('../config'),
  buildArgs = require('yargs').argv,
  webpackConfig = require("../../webpack.config.js"),
  zip = require('gulp-gzip');
gulpWebpackConfig = {
  useMemoryFs: false,
  progress: false
};

var isProd = function() {
  return buildArgs.ENV === 'prod';
};
var webpackOverrideOptions = function() {
  var options = {
    debug: !isProd(),
    devtool: isProd() ? '#source-map' : '#eval'
  };

  if (isProd()) {
    var plugins = webpackConfig.plugins;
    plugins.push(new webpack.optimize.UglifyJsPlugin({sourceMap: false}));
    options.plugins = plugins;
  }
  return options
};

gulp.task('webpack', [], function() {
  return gulp.src(CONFIG_FILENAME, {base: path.resolve(config.src)})
    .pipe(gulpWebpack.init(gulpWebpackConfig))
    .pipe(gulpWebpack.props(webpackOverrideOptions()))
    .pipe(gulpWebpack.run())
    .pipe(zip({append: true}))
    .pipe(gulp.dest(config.dest));
});