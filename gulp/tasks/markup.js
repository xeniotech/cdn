var gulp = require('gulp');
var path = require('path');
var minifyHTML = require('gulp-minify-html');
var config = require('../config').markup;
var htmlreplace = require('gulp-html-replace');
var buildArgs = require('yargs').argv;

var isProd = function() {
  return buildArgs.ENV === 'prod';
};

var getVendorFileName = function() {
  if (isProd()) {
    var stats = require(path.join(__dirname, '../../webpack-assets.json'));
    return stats['vendor'].js;
  } else {
    return 'vendor.js';
  }
};

gulp.task('markup', function() {
  var opts = {
    conditionals: true,
    spare: true
  };

  return gulp.src(config.src)
    .pipe(htmlreplace({
      'vendor': {
        src: getVendorFileName(),
        tpl: '<script src="./%s"></script>'
      }
    }))
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest(config.dest));
});