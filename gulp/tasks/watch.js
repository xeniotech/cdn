var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', ['browserSync'], function() {
  gulp.watch([config.js, config.less.src], ['webpack']);
  gulp.watch(config.markup.src, ['markup']);
  gulp.watch(config.images.src, ['images']);
});

var runSequence = require('run-sequence');

gulp.task('watch1', function(cb) {

  runSequence([
      'markup',
      'images'
    ],
    'watch'
  );

  cb();
});
