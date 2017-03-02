/**
 * Use waypoint and velocity to trigger
 * display animation when element is 
 * displayed at the viewport.
 * 
 * implements resizeObserver
 *
 * @use Waypoints (http://imakewebthings.com/waypoints/) for detecting element
 * @use Velocity (http://velocityjs.org/) for animations
         
 * @author @pabagan
 * @param 
 * @return void 
 * @credit plugin boilerplate (@ajpiano)
 */

 'use strict';
(function ($) {

    $.gx = $.gx || {};

    var defaults = {
        activateAt: 'lg',
    };    

    $.gx.Animations = function (options) {
        this.settings = $.extend( {}, defaults, options );
        //console.log('$.gx.Animations(element, options)');
        // Add screen class to manage
        this.screen = new $.gx.Screen();
    };

    /**
     * Animations Prototypes.
     */
    $.gx.Animations.prototype = {

        // Inizialize.
        init: function () {
            //console.log('$.gx.Animations.init()');
            var activateAt = this.settings.activateAt;
            
            // Set/unset depending on window
            // size width.
            if(this.settings.activateAt === 'xs' || this.screen.getWidth() > this.screen.getSizeValue(activateAt)) {
                this.setFxs();
            }
        },

        // Set waypoints watch
        // @using: Waypoints.
        // http://imakewebthings.com/waypoints/
        setFxs: function () {
            this.toggleMainNav();
            this.homePresentacion();
            //this.homeBifurca();
            this.entryFeaturedImg();
        },
        
        toggleMainNav: function () {
            var $element = $('#nav-toggle[aria-expanded="false"]');
            //var $element = $('#main-nav-toggle');
            
            $element.on('click', function(){
                $element
                    .velocity({
                        rotateY: "+=180deg",
                        rotateZ: 0,
                    }, {
                        duration: 700,
                        // ...
                    }
                );
            });
        },
        
        homePresentacion: function () {
            // Animate next button
            var $element = $('.anim-bt-1');

            $element
                .velocity({
                    translateY: "20px",
                    translateZ: 0,
                }, {
                    easing: 'sprint',
                    duration: 550,
                    loop: true,
                    // ...
                })
                .on({
                    mouseenter: function () {
                        $(this)
                            .velocity("stop");
                    },
                });
        },

        entryFeaturedImg: function () {
            var $element = $('.post-loop');
            // Use the loop option.
            $element.on({
                mouseenter: function () {
                    $(this).find('.c-curtain').addClass('is_on');
                    $(this).find('.c-img-bg')
                        .velocity({
                            scaleX: 1.1,
                            scaleY: 1.1,
                            //rotateZ: "+2deg",
                        }, {
                            duration: 350,
                            // ...
                        });
                },

                mouseleave: function () {
                    //stuff to do on mouse leave
                    console.log('mouse leave');
                    $(this).find('.c-curtain').removeClass('is_on');
                    $(this).find('.c-img-bg')
                        .velocity("reverse");
                }
            });
        },
    };
}(jQuery));