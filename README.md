# Frontend Development

Here is the system I have build for development tooling and frontend creation. It uses separated distribution folders for managing development/production flows. Key players are:
* [Nodejs](https://nodejs.org/).
* [Gulp](http://gulpjs.com/).
* [Bower](http://bower.com/).
* [Sass](http://sass-lang.com/).
* [Browsersync](https://browsersync.io/).


## How it works
In development Gulp is taking sources from `/src` to `./temp` folder. Browsersync is configured to serve `./temp`. At `gulp deploy` everything goes to `./dist` folder and rsync to deploy code to the server.

```bash
├── src                       # development sources managed by Gulp
│   ├── bower_components
│   ├── fonts
│   ├── html
│   ├── img
│   ├── js
│   ├── sass
│   └── unitTest
├── .temp                     # temporary files created by Gulp used for development
│   ├── assets
│   │   ├── css
│   │   ├── fonts
│   │   ├── img
│   │   ├── js
│   └── index.html
├── .dist                     # distro files with minifying and extras for deployment
│   ├── assets
│   │   ├── css
│   │   ├── fonts
│   │   ├── img
│   │   ├── js
│   └── index.html
├── .gulp                     # Gulp configuration scheme grouping by activity
│   ├── build.js
│   ├── deploy.js
│   ├── server.js
│   └── test.js
├── gulpfile.js               # Config Gulp routes and imports for /.gulp
├── package.json
├── .bowerrc
├── .jshintrc
```

 
```bash
# Install node modules
npm install
# Execute gulp (default gulp task configuration does the heavy lifting)
gulp
```

## Dependencies
Project dependencies are managed using [Bower](http://bower.com/). Find [API docs](https://bower.io/docs/api/).

```bash
bower install
```

Dependencies at `.bower.json` will be loaded at `/src/bower_components`. Can change location at `.bowerrc`.

```bash
# add new dependencie  save at .bower.json
bower install  <package>#<version>  --save
# List local packages and possible updates.
bower list
# update
bower update
# uninstall
bower uninstall <name> [<name> ..] [<options>]
```

## Automation with Gulp
[Gulp](http://gulpjs.com/) lives in separated file grouped by task family inside `/.gulp`.

```bash
.gulp/build.js      # build tasks
.gulp/deploy.js     # deploy tasks
.gulp/server.js     # server tasks using rsync to deploy
.gulp/tests.js      # test tasks
```

The `gulpfile.js` set configuration to do the lifting.

## CSS
CSS is done with [Sass](http://sass-lang.com/) and living at `src/sass`. The stylesheets are ordered applying [SMACSS](https://smacss.com/) principles (my [notes on SMACSS](https://github.com/pabagan/Knowledgebase/tree/master/SMACSS)).


## Javascript

### Javascript self scripts
Use a set of jQuery plugins at `/src/plugins` using namespaced @ajpiano pattern. Uses `/src/js/main.js` for plugin configuration/activation. 

Self scripts are concatenated at `/[.temp,.dist]/assets/js/main.min.js`.


### Javascript depencencies
Loaded directly via Gulp at `/.gulp/.build.js` and concatenated at `/[.temp,.dist]/assets/js/plugins.min.js` (at `./temp` lives still unminified).


```js
/**
 * Script Deps Gulp task
 */
gulp.task('scripts-deps', function() {
  
  var files = [
    // jQuery
    base.bower + '/jquery/dist/jquery.min.js',
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
  ];

  // ...
  
});
```


## Main Features
* Mobile-first optimized CSS (88.6kb of CSS) with SMACSS sass CSS under the hood.
* Cool IU FX: VelocityJS animations/toggles, element appears, fit lays system, height grid with child alignment, animated scrolls, hardware accelerated CSS animations.