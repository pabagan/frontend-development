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

    var defaults = {
        activateAt: 'md', 
    }; 

    $.gx.FitChildren = function (selector, options) {
        //console.log('$.gx.FitChildren(element)');
        this.elements = [];
        this.$parents = $(selector);
        this.$children = null;
        this.settings = $.extend( {}, defaults, options );

        this.screen = new $.gx.Screen();
    };

    /**
     * FitChildren Prototypes.
     */
    $.gx.FitChildren.prototype = {
        
        // Inizialize.
        init: function () {
            //console.log('$.gx.FitChildren.init()');
            var activateAt = this.settings.activateAt;
            
            if(this.settings.activateAt === 'xs' || this.screen.getWidth() > this.screen.getSizeValue(activateAt)) {
                this.set();
            } else {
                this.unset();
            }
        },

        set: function () {
            var e = this;
            
            // loop each parent to deals fit 
            // children's height
            $.each(this.$parents, function(i, element) {
                e.setHeight($(this).children());
            });
        },

        unset: function () {
            var e = this;

            // loop each parent to deals fit 
            // children's height
            $.each(this.$parents, function(i, element) {
                e.resetHeights($(this).children());
            });
        },

        // Reset element's height CSS.
        resetHeights: function ($children) {
            //console.log('$.gx.FitChildren.resetHeights()');
            $children.css('height', '');
        },

        // Max children height.
        // @return int maximium children's height (px)
        getMaxHeight: function ($children) {
            //console.log('$.gx.FitChildren.getMaxHeight()');
            var maxHeight = 0;
            
            // loop elemnt with selector
            $.each($children, function() {
                var eHeight = $(this).innerHeight();
                // Set max height
                if( eHeight > maxHeight ) {
                    maxHeight = eHeight;
                }
            });
            
            console.log('altura hijo mayor: ' + maxHeight);
            return maxHeight;
        },

        // Set children's height.
        // @param int height(px)
        // @return void
        setHeight: function ($children) {
            var height;
            
            // apply height reset
            this.resetHeights($children);
            height = this.getMaxHeight($children);
            
            // //console.log('$.gx.FitChildren.setChildrenHeight()');
            $.each($children, function() {
                var $child = $(this);
                
                $child.css({ 'height' : height + 'px' });
                // Apply just to shorter lays fails
                //if ($child.innerHeight() < height ) {}
            });
        },


        // Update used by observer update().
        update : function(){
            //console.log('$.gx.FitChildren.update()');
            this.init();
        },
    };
}(jQuery));