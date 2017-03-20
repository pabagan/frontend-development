'use strict';

/**
 * plugins
 */
var g = require('gulp'),
  clean = require('gulp-clean'),
  gutil = require('gulp-util'),
  browserSync = require('browser-sync').create(),
  cleanCSS = require('gulp-clean-css'),
  concat = require('gulp-concat'),
  htmlmin = require('gulp-htmlmin'),
  imagemin = require('gulp-imagemin'),
  rsync = require('rsync'),
  uglify = require('gulp-uglify');

/*
// TOD: copia chulis
g.task('copyHtml', function() {
  // copy any html files in source/ to public/
  g.src('source/*.html').pipe(g.dest('public'));
});
*/

/**
 * Copy from temp
 */
g.task('clone-temp', function () {
  return g
    .src(base.temp + '/**/*')
    .pipe(g.dest(base.dist))
    .on('error', gutil.log);
});

/**
 * HTML Minify
 */
g.task('html-minify', function() {
  return g.src(temp.base + '/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(g.dest('dist'));
});


/**
 * CSS Minify
 */
g.task('css-minify', function () {
  return g
    .src(temp.css + '/**/*.css')
    .pipe(cleanCSS())
    .pipe(g.dest(dist.css))
    .on('error', gutil.log);
});

/**
 * Scripts Minify
 */
g.task('scripts-minify', function() {
  return g
    .src(temp.scripts + '/**/*.js')
    .pipe(uglify())
    .pipe(g.dest(dist.scripts))
    .on('error', gutil.log);
});

/**
 * Optimize images
 */
g.task('images-optimize', function() {
  return g.src(temp.images + '/**/*')
    // Pass in options to the task
    .pipe(imagemin())
    .pipe(g.dest(dist.images))
    .on('error', gutil.log);
});

/**
 * Clean ./temp
 */
g.task('clean', function () {
  return g.src(base.temp, {read: false})
    .pipe(clean())
    .on('error', gutil.log);
});


/*
 * Rsync
 * https://www.npmjs.com/package/rsync
 */
g.task('rsync', function() {
  var cmd;
  cmd = rsync.build({
    'flags': 'avz',
    'shell': 'ssh',
    'source': './.dist/',
    'destination': process.env.CAROFILE_WEBSITE,
  })

  cmd.execute(function(error, code, cmd) {
      console.log('All done executing', cmd);
  });
});



// 'images-optimize' not active
g.task('minify-src', [ 
  'images-optimize', 
  'scripts-minify', 
  'css-minify', 
  'html-minify'
]);

// 'images-optimize' not active
g.task('minify', [ 
  'clone-temp',
], function(){
  g.start('minify-src');
});


g.task('deploy', [ 
  'minify',
], function(){
  g.start('rsync');
});