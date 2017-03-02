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

    $.gx = $.gx || {};

    // screen sizes
    var defaults = {
        // width in px
        'screenSizes': {
            xs  : 480,
            sm  : 639,
            md  : 940,
            lg  : 1200,
            xl  : 1599,
            xxl : 1900,
        },
    };

    $.gx.Screen = function (options) {
        //console.log('$.gx.Screen()');
        this.settings = $.extend( {}, defaults, options );
        this.size = null;
        this.width = null;
    };
    

    /**
     * Prototypes Screen.
     */
    $.gx.Screen.prototype = {
        
        // init
        init: function () {
            //console.log('$.gx.Screen.init()');
            this.size = this.getSize();
            this.width = this.getWidth();
            this.height = this.getHeight();
            //console.log('size: ' + this.size);
        	//console.log('width: ' + this.width);
        },

        // Get window width.
        // 
        // @return integer
        getWidth: function(){
            return $(window).width();
        }, 

        // Get window height.
        // 
        // @return integer
        getHeight: function(){
            return $(window).height();
        }, 

        // Get text size
        // 
        // @return integer
        getSizeValue: function(size){
            return this.settings.screenSizes[size];
        },

        // Get text size
        // 
        // @return string
        getSize: function(){
            var size = 'xs',
                screenSizes = this.settings.screenSizes,
                width = this.getWidth();

            if( width > screenSizes.xxl){
                size = 'xxl';
            } else if(width > screenSizes.xl){
                size = 'xl';
            } else if (width > screenSizes.lg){
                size = 'lg';
            } else if (width > screenSizes.md){
                size = 'md';
            } else if (width > screenSizes.sm){
                size = 'sm';
            }

            return size;
        },

        // Update used by observer update().
        // 
        // @return void
        update : function(){
            //console.log('$.gx.Screen.update()');
            this.init();
        },
    };

    //$.gx.Screen.defaults = {
    //    opt: 0,
    //};
}(jQuery));