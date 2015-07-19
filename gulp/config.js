var path = require('path');
var dest = './dist',
  src = './src',
  karmaPath = path.join(__dirname, '../karma.conf.js');

module.exports = {
  browserSync: {
    server: {
      baseDir: [dest]
    },
    files: [
      dest + '/**'
    ],
    open: false
  },
  markup: {
    src: src + "/**/*.html",
    dest: dest
  },
  less: {
    src: src + "/**/*.less",
    dest: dest
  },
  images: {
    src: [
      src + "/**/*.jpg",
      src + "/**/*.jpeg",
      src + "/**/*.png"
    ],
    dest: dest
  },
  karma: karmaPath,
  mocks: {
    src: src + "/**/*.json",
    dest: dest
  },
  js: src + "/**/*.js",
  src: src,
  dest: dest
};
