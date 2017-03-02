'use strict';

/**
 * Class to implement a interface for Masonry 
 * layouts.
 *
 * @uses http://masonry.desandro.com/
 * @uses https://github.com/desandro/imagesloaded
 * 
 * @author @pabagan
 * @return void 
 */
(function ($) {
    
    $.gx = $.gx || {};

    var defaults = {
        activateAt: 'sm',
        masonryContent: '.c-masonry',
        masonryItem: '.c-masonry-item',
    };
    
    $.gx.Masonry = function (selector, options) {
        //console.log('$.gx.Masonry(options)');
        this.selector = selector;
        this.settings = $.extend( {}, defaults, options );
        this.masonry = null;
        
        // Add screen class to manage 
        // fx activation.
        this.screen = new $.gx.Screen();
    };

    /**
     * Masonry Prototypes.
     */
    $.gx.Masonry.prototype = {
        // Activates parallax JS/CSS
        // depending on activateAt setting.
        init: function () {
            //console.log('$.gx.Masonry.init()');
            if($(this.selector).length > 0){
                // get size for activation
                var activateAt = this.settings.activateAt;

                // screen size activation logic
                if(this.settings.activateAt === 'xs' || this.screen.getWidth() > this.screen.getSizeValue(activateAt)) {
                    this.set();
                } else {
                    this.unset();
                }
            }
        },

        // Set masonry fx with imagesLoaded.
        // https://github.com/desandro/imagesloaded
        set: function () {
            //console.log('$.gx.Masonry.set()');
            var that = this;
            
            new imagesLoaded( that.selector, function(){
                that.masonry = new Masonry( that.selector, {
                    itemSelector: that.settings.masonryItem.toString(),
                });
            });
        },

        // Unset masonry.
        unset: function () {
            //console.log('$.gx.Masonry.unset()');
            if(this.masonry !== null){
              this.masonry.destroy();
            }
        },

        // Update method for observer 
        // pattern.
        update: function(){
            //console.log('$.gx.Masonry.update()');
            this.init();
        },
    };

    // This works as class variables
    //$.gx.Masonry.toggleModel = {
    //    opt: 0,
    //};
}(jQuery));
