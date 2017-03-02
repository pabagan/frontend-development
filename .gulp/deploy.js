'use strict';

/**
 * plugins
 */
var gulp = require('gulp'),
  clean = require('gulp-clean'),
  gutil = require('gulp-util'),
  browserSync = require('browser-sync').create(),
  cleanCSS = require('gulp-clean-css'),
  concat = require('gulp-concat'),
  imagemin = require('gulp-imagemin'),
  prettify = require('gulp-prettify'),
  rsync = require('rsync'),
  uglify = require('gulp-uglify');

/*
// TOD: copia chulis
gulp.task('copyHtml', function() {
  // copy any html files in source/ to public/
  gulp.src('source/*.html').pipe(gulp.dest('public'));
});
*/

/**
 * Copy from temp
 */
gulp.task('clone-temp', function () {
  return gulp
    .src(base.temp)
    .pipe(gulp.dest(base.dist))
    .on('error', gutil.log);
});

/**
 * Scripts Minify
 */
gulp.task('scripts-minify', function() {
  return gulp
    .src(temp.scripts + '/main.min.js')
    .pipe(uglify())
    .pipe(gulp.dest(dist.scripts))
    .on('error', gutil.log);
});

/**
 * CSS Minify
 */
gulp.task('css-minify', function () {
  return gulp
    .src(temp.css + '/style.min.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest(dist.css))
    .on('error', gutil.log);
});

/**
 * Optimize images
 */
gulp.task('images-optimize', function() {
  return gulp.src(temp.images + '/**/*')
    // Pass in options to the task
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest(dist.images))
    .on('error', gutil.log);
});

/**
 * HTML Pretify
 */
gulp.task('html-pretify', function () {
  gulp.src(temp.html + '/**/*.html')
    .pipe(prettify({
      indent_size: 2, 
      indent_inner_html: true,
      unformatted: ['pre', 'code']
    }))
    .pipe(gulp.dest(dist.html))
    .on('error', gutil.log);
});

/**
 * Clean ./temp
 */
gulp.task('clean', function () {
  return gulp.src(base.temp, {read: false})
    .pipe(clean())
    .on('error', gutil.log);
});


/*
 * Using Vanilla rsync
 */
gulp.task('rsync', function() {
  var cmd;
  cmd = rsync.build({
      'flags': 'avz',
      'shell': 'ssh',
      'source': '/home/pabagan/Dev/www/UT/.temp/',
      'destination': process.env.UT_SERVER,
  })

  cmd.execute(function(error, code, cmd) {
      console.log('All done executing', cmd);
  });
});



gulp.task('minify', [ 'scripts-minify', 'css-minify']);
// 'images-optimize' not active
gulp.task('deploy', [ 'build', 'clone-temp', 'minify', 'html-pretify', 'rsync']);