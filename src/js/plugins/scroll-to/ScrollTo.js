'use strict';

/**
 * Class to implement a interface for ScrollTo 
 * functionallity
 * 
 * @uses http://velocityjs.org/
 * 
 * @author @pabagan
 * @return void 
 */
(function ($) {
    
    $.gx = $.gx || {};

    var defaults = {
    };
    
    $.gx.ScrollTo = function (selector, options) {
        //console.log('$.gx.ScrollTo(options)');
        this.selector = selector;
        this.settings = $.extend( {}, defaults, options );
        
        // when fixed header e.g.
        this.offset = -$('.site-branding').height(); // px height
    };

    /**
     * ScrollTo Prototypes.
     */
    $.gx.ScrollTo.prototype = {
        init: function () {
            //console.log('$.gx.ScrollTo.init()');
            if($(this.selector).length > 0){
                this.click();
            }
        },

        // Click event
        click: function () {
            var that = this;
            //console.log('$.gx.ScrollTo.click()');
            $(this.selector).on('click', function(e){
                e.preventDefault();
                
                var targetSelector = $(this).data('scroll-to');

                that.scrollBodyTo(targetSelector);
            });
        },

        // Scroll body to a target lay
        scrollBodyTo: function (targetSelector) {
            //console.log('$.gx.ScrollTo.scroll()');
            //console.log($('.site-branding').height());
            //console.log(targetSelector);
            $(targetSelector).velocity('scroll', { 
                duration: 500, 
                //easing: 'spring',
                //easing: 'swing',
                //easing: 'easeInSine',
                easing: 'easeOutSine',
                offset: this.offset,
            });
        },
    };

    // This works as class variables
    //$.gx.ScrollTo.toggleModel = {
    //    opt: 0,
    //};
}(jQuery));
