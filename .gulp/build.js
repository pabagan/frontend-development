'use strict';

/**
 * plugins
 */
var gulp = require('gulp'),
  gutil = require('gulp-util'),
  cache = require('gulp-cached'),
  htmlhint = require('gulp-htmlhint'),
  concat = require('gulp-concat'),
  header = require('gulp-header'),
  jshint = require('gulp-jshint'),
  plumber = require('gulp-plumber'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps');

/**
 * JS files banner
 */
var pkg = require('./../package.json');
var file_header = ['/**',
  ' * Name: <%= pkg.niceName %>',
  ' * Version: <%= pkg.version %>',
  ' * Author: <%= pkg.author %>',
  ' * Author URI: <%= pkg.author_uri %>',
  ' * License: <%= pkg.license %> licensed (<%= pkg.copyright %>).',
  ' * License URI: <%= pkg.license_uri %>.',
  ' * ',
  ' * All files, unless otherwise stated, are released under the GNU General Public',
  ' * License version 3.0 (http://www.gnu.org/licenses/gpl-3.0.html).',
  ' * All HTML/CSS/JAVASCRIPT code is also released under Envato\'s Regular/Extended License (http://themeforest.net/licenses).',
  '**/',
  '',
''].join('\n');

/**
 * JS plugins dependencies
 * TODO: no informa si la caga cargando algún archivo
 */
gulp.task('scripts-deps', function() {
  
  var files = [
    // jQuery -->  86.7 kb
    base.bower + '/jquery/dist/jquery.min.js',
    // Images loaded --> 5.4 kb
    base.bower + '/imagesloaded/imagesloaded.pkgd.min.js',
    // Isotope
    // base.bower + '/isotope/dist/isotope.pkgd.min.js',
    // Masonry --> 6.4 kb
    base.bower + '/masonry/dist/masonry.pkgd.min.js',
    // Parallax scene: not working!!! TODO
    //base.bower + '/parallax/deploy/parallax.min.js',
    // Parallax background
    //base.bower + '/parallax.js/parallax.min.js',
    
    // Royal Slider: Need get via grunt curl since no 
    // Superfish --> 4.5 kb
    base.bower + '/superfish/dist/js/superfish.min.js',
    // Owl Carousel
    //base.bower + '/owlcar/owl-carousel/owl.carousel.min.js',
    // Owl Carousel 2 --> 42.9 kb
    base.bower + '/owl.carousel/dist/owl.carousel.min.js',
    // Velocity --> 35.6 kb
    base.bower + '/velocity/velocity.min.js',
    // Velocity UI --> 13.4 kb
    base.bower + '/velocity/velocity.ui.min.js',
    // Waypoints --> 8.8 kb
    base.bower + '/waypoints/lib/jquery.waypoints.min.js',
    // Transit -->  22.3 kb (uncompressed)
    // https://github.com/rstacruz/jquery.transit
    //base.bower + '/jquery.transit/jquery.transit.js',
    
    // Validator --> 22.7 kb
    // https://www.npmjs.com/package/validator
    //base.bower + '/validator-js/validator.min.js',
    
    // jQuery Validation Validator --> 23.1 kb
    // https://jqueryvalidation.org/
    base.bower + '/jquery-validation/dist/jquery.validate.min.js',
    // base.bower + '/jquery-validation/src/localization/messages_es.js',
    // base.bower + '/jquery-validation/src/localization/messages_de.js',
    // base.bower + '/jquery-validation/src/localization/messages_ca.js',
    // base.bower + '/jquery-validation/src/localization/messages_fr.js',


    //
    // Modernizr -->  48.7 kb (unminified)
    // 
    //src.scripts + '/vendor/modernizr/modernizr.js',
    
    //
    // Premium plugins (Not at bower)
    //
    // Royal Slider
    //src.scripts + '/vendor/jquery.royalslider.min.js',

    // 
    // Bootstrap JS
    // 
    //base.bower + '/bootstrap/js/affix.js',
    //base.bower + '/bootstrap/js/alert.js',
    //base.bower + '/bootstrap/js/button.js',
    //base.bower + '/bootstrap/js/carousel.js',
    //base.bower + '/bootstrap/js/collapse.js',
    //base.bower + '/bootstrap/js/dropdown.js',
    //base.bower + '/bootstrap/js/tab.js',
    //base.bower + '/bootstrap/js/transition.js',
    //base.bower + '/bootstrap/js/scrollspy.js',
    //base.bower + '/bootstrap/js/modal.js',
    //base.bower + '/bootstrap/js/tooltip.js',
    //base.bower + '/bootstrap/js/popover.js',
    
    // Unit Test -->  30 kb
    base.unitTest + '/unitTest.js',
  ];

  return gulp
    .src(files)
    //.pipe(plumber(function(error) {
      // Output an error message
      //gutil.log(gutil.colors.red('Error (' + error.plugin + '): ' + error.message));
      // emit the end event, to properly end the task
      //this.emit('end');
    //}))
    .pipe(concat('plugins.min.js')) // still not minified
    .pipe(header(file_header, { pkg : pkg } ))
    .pipe(gulp.dest(temp.scripts))
    .on('error', gutil.log);
});

/**
 * Scripts
 */
gulp.task('scripts', function() {
  var sources = [
    // Unit Test
    src.scripts + '/patterns/**/*.js',
    src.scripts + '/plugins/**/*.js',
    src.scripts + '/*.js',
  ];

  // Minify and copy all JavaScript (except vendor scripts)
  // with sourcemaps all the way down
  return gulp
    .src(sources)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    //.pipe(jshint.reporter('default'))
    .pipe(concat('main.min.js')) // still not minified
    .pipe(header(file_header, { pkg : pkg } ))
    .pipe(gulp.dest(temp.scripts))
    .on('error', gutil.log);
});

/**
 * sass
 */
gulp.task('sass', function () {
  // sass sources
  var sources = [
    // Unit Test
    src.sass + '/**/*.scss',
  ];

  return gulp.src(sources) // max 3 levels
    .pipe(plumber(function(error) {
      // Output an error message
      gutil.log(gutil.colors.red('Error (' + error.plugin + '): ' + error.message));
      // emit the end event, to properly end the task
      this.emit('end');
    }))
    .pipe(sass().on('error', gutil.log))
    // HTML development strategy keeps css 
    // under ./assets/css and rename to .min.css
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(temp.css))
    
    // WP Themes
    // Theme development strategy keeps css 
    // at root . and not rename.
    //.pipe(gulp.dest('.'))

    .pipe(header(file_header, { pkg : pkg } ))
    .on('error', gutil.log);
});


/**
 * HTML
 */
gulp.task('html', function () {
  var sources = [
    src.html + '/*.html',
    src.html + '/html/*.html',
  ];
  
  return gulp
    .src(sources)
    .pipe(htmlhint())
    .pipe(gulp.dest(temp.html))
    .on('error', gutil.log);
});

/**
 * Copy all static images
 */
gulp.task('images', function() {
  return gulp.src(src.images + '/**/*')
    .pipe(cache('images'))
    .pipe(gulp.dest(temp.images))
    .on('error', gutil.log);
});

/**
 * Fonts
 */
gulp.task('fonts', function() {
  return gulp.src([src.fonts + '/**/*'])
    .pipe(cache('fonts'))
    .pipe(gulp.dest(temp.fonts))
    .on('error', gutil.log);
});


// Heavy lifting start
gulp.task('build', [ 'scripts-deps', 'scripts', 'sass', 'html', 'images', 'fonts']);