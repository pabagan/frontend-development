'use strict';

var gulp = require('gulp'),
  browserSync = require('browser-sync');

/**
 * BrowserSync
 */
gulp.task('bsync-dev', ['styles', 'scripts', 'scripts-deps', 'html', 'images'], function() {
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
    base.gulp + '/*.js',
    src.scripts + '/vendor/**/*.js',
  ];

  // sass
  var sassSources = [
    base.src + '/unitTest/*.scss',  // Unit Test
    src.sass + '/**/**/**/*.scss',
  ];  

  gulp.watch(htmlSources, ['html-watch']);
  gulp.watch(src.scripts + '/**/*.js', ['scripts-watch']);
  gulp.watch(sassSources, ['styles-watch']);
  gulp.watch(src.images + '/**/*', ['images-watch']);
  gulp.watch(scriptDepsSources, ['scripts-deps-watch']);
  gulp.watch(src.fonts + '/**/*', ['fonts-watch']);
  
  // Fonts andjs-deps with gulp build
  
});

gulp.task('styles-watch', ['styles'], function (done) {
  browserSync.reload();
  done();
});

gulp.task('html-watch', ['html'], function (done) {
  browserSync.reload();
  done();
});

gulp.task('scripts-watch', ['scripts'], function (done) {
  browserSync.reload();
  done();
});

gulp.task('scripts-deps-watch', ['scripts-deps'], function (done) {
  browserSync.reload();
  done();
});

gulp.task('images-watch', ['images'], function (done) {
  browserSync.reload();
  done();
});

gulp.task('fonts-watch', ['fonts'], function (done) {
  browserSync.reload();
  done();
});

gulp.task('server-dev', ['bsync-dev']);