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
        animateChilds: false,
        class: 'is_appear',
        animation: {
            name: 'fadeIn',                 // match velocityUI fx
            duration: 350,                  // animation duration
            delay: 0,                       // animation delay
            stagger: 0,                     // animation time betweed childs appearing
        },
        offset: '50%',                      // % hidded to display
        activateAt: 'lg',                   // if size change need to adjust 
                                            // sass/plugins/animate-appear.
    };    
    $.gx.Appear = function (element, options) {
        this.settings = $.extend( {}, defaults, options );
        //console.log('$.gx.Appear(element, options)');
        this.element = element;
        this.animation = this.settings.animation;
        
        // Add screen class to manage
        // activation/deactivation
        this.screen = new $.gx.Screen();
    };

    /**
     * Appear Prototypes.
     */
    $.gx.Appear.prototype = {

        // Inizialize.
        init: function () {
            //console.log('$.gx.Appear.init()');
            var activateAt = this.settings.activateAt;
            

            // Set/unset depending on window
            // size width.
            if(this.settings.activateAt === 'xs' || this.screen.getWidth() > this.screen.getSizeValue(activateAt)) {
                this.set();
            } else{
                this.unset();
            }

        },

        // Set waypoints watch
        // @using: Waypoints.
        // http://imakewebthings.com/waypoints/
        set: function () {
            //console.log('$.gx.Appear.set()');
            var base = this;

            //Waypoint.enableAll();
            $(this.element).each(function() {
                var e = this;
                $(e).waypoint({
                    handler: function(direction) {
                        //console.log(this.element.id + ' hit' + direction)
                        base.appearCb(this);
                    },
                    offset: base.getOffset(this),
                });
            });
        },

        // appear element animation. This method 
        // includes the logic of the setting 
        // 'settings.animateChilds'.
        // @using: Velocity http://velocityjs.org/
        appearCb: function (elem) {
            //console.log('$.gx.Appear.appearCb(elem)');
            
            var $elem = $(elem.element),
                animationStr = $elem.data('animation'),
                animation = this.getAnimation(animationStr),
                velAnimation;
            
            //
            // animate childs logic
            //
            //console.log(this.settings);
            if(this.settings.animateChilds){
                // set target to childs
                $elem = $elem.children();
            }

            velAnimation = {
                duration: parseInt(animation.duration),
                delay: parseInt(animation.delay),
                stagger: parseInt(animation.stagger),
            };

            // velocity transition
            $elem.velocity('transition.'+ animation.name, velAnimation);
            $elem.addClass(this.settings.class);
            elem.disable();
        },

        getOffset: function (elem) {
            //console.log('$.gx.Appear.getOffset()');
            
            var e = this,
                offset = e.settings.offset,
                ofsetAttr = $(elem).data('offset');

            if(ofsetAttr !== undefined) {
                offset = ofsetAttr;
            }

            //console.log(offset);
            return offset;
        },

        // Set animation object from html data-animate 
        // property. Ordered as animationKeys list 
        // shows.
        // 
        // Order: <data-animation="name duration delay offset">
        // @param string animation
        // @return object animation
        getAnimation: function (animationStr) {
            //console.log('$.gx.Appear.setAnimation()');
            var e = this,
                animation = e.animation;
            
            // Check if element html has defined 
            // data-animation to override defaults.
            if(animationStr !== undefined) {
                //console.log('defined html animation!!');

                var animationKeys = ['name', 'duration', 'delay', 'stagger'],
                    animationLst = $.trim(animationStr).split(' ');

                // Set animation object
                for(var i in animationLst){
                    animation[animationKeys[i]] = animationLst[i];
                }
            }

            return animation;
        },

        // Unset appear
        // 
        // @return void 
        unset: function(){
            //console.log('$.gx.Appear.unset()');
            $(this.element).addClass(this.settings.class);
            Waypoint.disableAll();
        },

        // Update observer method to 
        // trigger waypoints update.
        update: function(){
            //console.log('$.gx.Appear.update()');
            Waypoint.refreshAll();
        }
    };
}(jQuery));