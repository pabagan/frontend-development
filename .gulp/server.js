'use strict';

var g = require('gulp'),
  browserSync = require('browser-sync');

/**
 * BrowserSync
 */
g.task('bsync-dev', ['styles', 'scripts', 'scripts-deps', 'html', 'images'], function() {
  browserSync.init({
    server: temp.base,
    open: false,
    reloadDelay: 550, // 525
  });

  // html
  var htmlSources = [
  src.html + '/*.html',
  src.html + '/html/*.html',
  ];
 
  // js deps
  var scriptDepsSources = [
    base.bower + '/**/*.js',
    base.src + '/unitTest/*.js',  // Unit Test
    base.g + '/*.js',
    src.scripts + '/vendor/**/*.js',
  ];

  // sass
  var sassSources = [
    base.src + '/unitTest/*.scss',  // Unit Test
    src.sass + '/**/**/**/*.scss',
  ];  

  g.watch(htmlSources, ['html-watch']);
  g.watch(src.scripts + '/**/*.js', ['scripts-watch']);
  g.watch(sassSources, ['styles-watch']);
  g.watch(src.images + '/**/*', ['images-watch']);
  g.watch(scriptDepsSources, ['scripts-deps-watch']);
  g.watch(src.fonts + '/**/*', ['fonts-watch']);
  
  // Fonts andjs-deps with g build
  
});

g.task('styles-watch', ['styles'], function (done) {
  browserSync.reload();
  done();
});

g.task('html-watch', ['html'], function (done) {
  browserSync.reload();
  done();
});

g.task('scripts-watch', ['scripts'], function (done) {
  browserSync.reload();
  done();
});

g.task('scripts-deps-watch', ['scripts-deps'], function (done) {
  browserSync.reload();
  done();
});

g.task('images-watch', ['images'], function (done) {
  browserSync.reload();
  done();
});

g.task('fonts-watch', ['fonts'], function (done) {
  browserSync.reload();
  done();
});

g.task('server-dev', ['bsync-dev']);