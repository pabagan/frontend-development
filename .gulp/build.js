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
 * Scripts dependencies
 * Separates vendor/scripts to jshint 
 * just over self scripts. Concat all 
 * at '/assets/js/scripts.min.js'.
 */
gulp.task('scripts-deps', function() {
  // Vendor sources
  var sources = [
    // jQuery -->  86.7 kb
    // is loading appart at html to trying 
    // to load from window.jQuery first.
    //base.bower + '/jquery/dist/jquery.min.js',
    
    base.bower + '/imagesloaded/imagesloaded.pkgd.min.js',          // Images loaded --> 5.4 kb
    // base.bower + '/isotope/dist/isotope.pkgd.min.js',            // Isotope
    base.bower + '/masonry/dist/masonry.pkgd.min.js',               // Masonry --> 6.4 kb
    base.bower + '/superfish/dist/js/superfish.min.js',             // Superfish --> 4.5 kb
    base.bower + '/owl.carousel/dist/owl.carousel.min.js',          // Owl Carousel 2 --> 42.9 kb
    base.bower + '/velocity/velocity.min.js',                       // Velocity --> 35.6 kb
    base.bower + '/velocity/velocity.ui.min.js',                    // Velocity UI --> 13.4 kb
    base.bower + '/waypoints/lib/jquery.waypoints.min.js',          // Waypoints --> 8.8 kb
    //base.bower + '/jquery.transit/jquery.transit.js',             // Transit -->  22.3 kb (uncompressed)
    base.bower + '/jquery-validation/dist/jquery.validate.min.js',  // jQuery Validation Validator --> 23.1 kb from https://jqueryvalidation.org/
    // base.bower + '/jquery-validation/src/localization/messages_es.js',
    // base.bower + '/jquery-validation/src/localization/messages_de.js',
    // base.bower + '/jquery-validation/src/localization/messages_ca.js',
    // base.bower + '/jquery-validation/src/localization/messages_fr.js',

    // Modernizr -->  48.7 kb (unminified)
    //src.scripts + '/vendor/modernizr/modernizr.js',
    
    // Royal Slider
    //src.scripts + '/vendor/jquery.royalslider.min.js',

    // 
    // Bootstrap JS
    // 
    // bootstrap theter dependency
    //base.bower + '/theter/dist/js/theter.min.js',
    
    //base.bower + '/bootstrap/js/dist/affix.js',
    //base.bower + '/bootstrap/js/dist/alert.js',
    //base.bower + '/bootstrap/js/dist/button.js',
    //base.bower + '/bootstrap/js/dist/carousel.js',
    //base.bower + '/bootstrap/js/dist/collapse.js',
    //base.bower + '/bootstrap/js/dist/dropdown.js',
    //base.bower + '/bootstrap/js/dist/tab.js',
    //base.bower + '/bootstrap/js/dist/transition.js',
    base.bower + '/bootstrap/js/dist/util.js',
    base.bower + '/bootstrap/js/dist/scrollspy.js',
    //base.bower + '/bootstrap/js/dist/modal.js',
    //base.bower + '/bootstrap/js/dist/tooltip.js',
    //base.bower + '/bootstrap/js/dist/popover.js',
    
    // Unit Test -->  30 kb
    base.unitTest + '/unitTest.js',
  ];

  // Minify and copy all JavaScript (except vendor scripts)
  return gulp.src(sources)
    //.pipe(jshint.reporter('default'))
    .pipe(concat('plugins.min.js')) // still not minified
    .pipe(header(file_header, { pkg : pkg } ))
    .pipe(gulp.dest(temp.scripts))
    .on('error', gutil.log);
});

/**
 * Scripts
 * Separates vendor/scripts to jshint 
 * just over self scripts. Concat all 
 * at '/assets/js/scripts.min.js'.
 */
gulp.task('scripts', function() {
  // Self sources
  var sources = [
    // Unit Test
    //src.scripts + '/patterns/**/*.js',
    //src.scripts + '/plugins/**/*.js',
    //src.scripts + '/*.js',
    
    // Patterns
    src.scripts + '/patterns/Observer/List.js',
    src.scripts + '/patterns/Observer/Observer.js',
    
    // Plugins
    src.scripts + '/plugins/animations/Animations.js',
    src.scripts + '/plugins/appear/Appear.js',
    src.scripts + '/plugins/debounce/Debounce.js',
    src.scripts + '/plugins/fit-children/FitChildren.js',
    src.scripts + '/plugins/forms/Forms.js',
    src.scripts + '/plugins/googleAnaliticsEvents/GoogleAnalyticsEvents.js',
    src.scripts + '/plugins/masonry/Masonry.js',
    src.scripts + '/plugins/screen/Screen.js',
    src.scripts + '/plugins/scroll-to/ScrollTo.js',
    src.scripts + '/plugins/sliders/Sliders.js',
    src.scripts + '/plugins/togglers/ClassToggler.js',
    src.scripts + '/plugins/togglers/VelocityToggler.js',
    
    // Entrypoint
    src.scripts + '/main.js',
    
    // Test file for exploratory code.
    src.scripts + '/tests.js',
  ];

  // Minify and copy all JavaScript (except vendor scripts)
  return gulp.src(sources)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    //.pipe(jshint.reporter('default'))
    .pipe(concat('main.min.js')) // still not minified
    .pipe(header(file_header, { pkg : pkg } ))
    .pipe(gulp.dest(temp.scripts))
    .on('error', gutil.log);
});

/**
 * Vendor scripts to '/assets/js'
 */
gulp.task('vendor-scripts', function() {
  // sass sources
  var sources = [
    // Unit Test
    base.bower + '/jquery/dist/jquery.min.js',
    base.bower + '/bootstrap/dist/js/bootstrap.min.js',
  ];
  return gulp
    .src(sources)
    //.pipe(plumber(function(error) {
      // Output an error message
      //gutil.log(gutil.colors.red('Error (' + error.plugin + '): ' + error.message));
      // emit the end event, to properly end the task
      //this.emit('end');
    //}))
    .pipe(gulp.dest(temp.scripts))
    .on('error', gutil.log);
});

/**
 * Styles concatenate sass and put
 * at '/assets/css'
 */
gulp.task('styles', function () {
  // sass sources
  var sources = [
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
 * Vendor styles to '/assets/css'
 */
gulp.task('vendor-styles', function() {
  // sass sources
  var sources = [
    // Unit Test
    base.bower + '/bootstrap/dist/css/bootstrap.min.css',
    base.bower + '/bootstrap/dist/css/bootstrap-grid.min.css',
  ];
  return gulp
    .src(sources)
    //.pipe(plumber(function(error) {
      // Output an error message
      //gutil.log(gutil.colors.red('Error (' + error.plugin + '): ' + error.message));
      // emit the end event, to properly end the task
      //this.emit('end');
    //}))
    .pipe(gulp.dest(temp.css))
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
gulp.task('build', [ 
    'scripts', 
    'scripts-deps', 
    'vendor-scripts', 
    'vendor-styles', 
    'styles', 
    'html', 
    'images', 
    'fonts'
  ]
);