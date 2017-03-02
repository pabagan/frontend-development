# Plugins
Plugins are done using @ajpiano patterns with some variations. Its add self namespaces and object syntax for prototype:

```js
/**
 * Fit child elements height
 * 
 * implements resizeObserver
 * 
 * @author @pabagan
 * @param 
 * @return void 
 * @credit plugin boilerplate (@ajpiano)
 */

 'use strict';
(function ($) {
    // namespaces with gx
    $.gx = $.gx || {};
    // PluginName sizes
    var defaults = {
        // width in px
        'PluginNameSizes': {
            'xs'  : 480,
            'sm'  : 639,
            'md'  : 992,
            'lg'  : 1200,
            'xl'  : 1600,
            'xxl' : 1900,
        },
    };

    // defaults as class static 
    // variable.
    //$.gx.PluginName.defaults = {
    //    opt: 0,
    //};

    $.gx.PluginName = function (element, options) {
        console.log('$.gx.PluginName()');
        this.element = element;
        this.settings = $.extend( defaults, options );
        this.init()        
    };
    

    /**
     * PluginName Prototypes. init() work
     * as a contructor.
     */
    $.gx.PluginName.prototype = {
        
        /**
         * Inizialize.
         * 
         * @return void
         */
        init: function () {
            console.log('$.gx.PluginName.init()');
        },
        
        /**
         * Update used by observer update().
         * 
         * @return void
         */
        update : function(){
            console.log('$.gx.PluginName.update()');
            this.init();
        },
    };

}(jQuery));
```
