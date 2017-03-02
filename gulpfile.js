/**
 * Main Gulpfile.
 *
 * Defines project directory structure.
 * By default:
 *   - '.src': development resources
 *   - '.temp': development assets and development server
 *   - '.dist': distribute folder.
 * 
 * @author @pabagan
 * @param 
 * @return void 
 */
'use strict';

var gulp = require('gulp');

/**
 * define base directories for your
 * development areas.
 */
global.base = {
  src:      './src',                    // Development sources (sass, js, images, ...)
  temp:     './.temp',                  // Temporary assets ans development server
  dist:     './.dist',                  // Distribute assets
  gulp:     './.gulp',                  // Gulp folder
  bower:    './src/bower_components',   // Bower directory
  unitTest: './src/unitTest',           // Unit Test UI
};

/**
 * Build default url folder and assets 
 * structure.
 * 
 * @param string baseLocation define base folder for the resource
 * @param boolean groupInsideAssets 
 */
function urls_creator(baseLocation, groupInsideAssets ){
  // Group inside /assets. 
  var assets = baseLocation;
  
  if(groupInsideAssets){
    assets = baseLocation + "/assets";
  }

  return {
    // WP Themes strategy
    base:     baseLocation,
    // WP Themes html strategy
    //html:     '.',
    //php:      '.',
    // Plain html strategy
    html:     baseLocation,

    // assets
    assets:   assets,
    images:   assets + '/img',
    css:      assets + '/css',
    sass:     assets + '/sass',
    scripts:  assets + '/js',
    fonts:    assets + '/fonts',
  }
}

/**
 * Create folder structure globals
 */
global.src  = urls_creator(base.src),
global.dist = urls_creator(base.dist, true);
global.temp = urls_creator(base.temp, true);

/**
 * Require config files
 */
require('./.gulp/build');
require('./.gulp/deploy');
require('./.gulp/tests');
require('./.gulp/server');

/**
 * Set default Gulp task for '$ grunt' command.
 */
gulp.task('default', ['build', 'server-dev']);