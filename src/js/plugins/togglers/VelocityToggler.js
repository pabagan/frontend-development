'use strict';
/**
 * An element toggle VelocityUI classes 
 * to show on/off element.
 *
 * The toggler self toggle the classe 
 * is_toggled. The target show in/out 
 * activating velocityUI animations.
 * 
 * see: http://velocityjs.org/
 * 
 * @author @pabagan
 * @return void 
 */
(function ($) {
    
    $.gx = $.gx || {};
    $.gx.Toggle = $.gx.Toggle || {};

    var defaults = {
        animateDuration: 250,
        animateDelay: 0,
        animateIn: 'slideLeftBigIn',
        animateOut: 'slideLeftBigOut',
    };
    
    $.gx.Toggle.velocityUI = function (selector, options) {
        //console.log('$.gx.Toggle.velocityUI(selector, options)');
        this.selector = selector;
        this.settings = $.extend( {}, defaults, options );

    };



    /**
     * VelocityToggler Prototypes.
     */
    $.gx.Toggle.velocityUI.prototype = {
        // init
        init: function () {
            //console.log('$.gx.Toggle.velocityUI.init()');
            var that = this;

            $(that.selector).on('click', function(){
                //console.log('$.gx.Toggle.velocityUI click()');              
                that.toggle(this);
            });
        },

        // toggle
        toggle: function(element){
            //console.log('$.gx.Toggle.velocityUI.toggle()');
            
            var that = this,
                $element = $(element),
                target = $element.attr('aria-controls'),
                $target = $('#' + target),
                state,
                animation,
                fxDuration = that.settings.animateDuration;
          
            // Toggler class timeout
            setTimeout(function(){
                clearTimeout(fxDuration);

                state = $element.attr('aria-expanded');
                animation = that.getAnimation(state);

                // DEBUG:
                //console.log('---------------------------------------');
                //console.log('Timeout pre states');
                //console.log('---------------------------------------');
                //console.log('State: ' + state);
                //console.log('Target: ' + target);
                //console.log('fxDuration: ' + fxDuration);
                //console.log('Animation: ' + animation);

                // animate
                that.animate($target, animation);
                // state toggle
                that.stateToggle($element, $target, state);                
            }, fxDuration);
        },

        // Toggle elemento aria-expanded attr. The 
        //state manages velocity animate in/out.
        //
        // @param jQuery object $element 
        // @param boolean state
        stateToggle: function($element, $target, state){
            //console.log('$.gx.Toggle.velocityUI.stateToggle($element, state)');
            // toggle classes to elements
            $element.toggleClass('is_hide is_show');
            $target.toggleClass('is_hide is_show');
            
            // toggle state value
            state = (state == 'false') ? 'true': 'false';
            
            // ... and change value at html
            $element.attr('aria-expanded', state);            
        },

        // Get animation depending on passed
        // state.
        // 
        // @param boolean state
        // @return string animation
        getAnimation: function(state){
            //console.log('$.gx.Toggle.velocityUI.getAnimation(state)');
            var animation = '';
            
            if (state === 'false'){
                animation = this.settings.animateIn;
            } else {
                animation = this.settings.animateOut;
            }

            //console.log(animation);
            return animation;
        },

        // Velocity animation.
        // @param jQueryObj $target 
        // @param string animation name
        animate: function($target, animation){
            //console.log('$.gx.Toggle.velocityUI.animate($target, animation)');
            var that = this;

            // velocity transition
            $target.velocity('transition.'+ animation, {     
                duration: that.settings.animateDuration,
                delay: that.settings.animateDelay,
            });
        },
    };

    // This works as class variables
    //$.gx.Toggle.velocityUI.toggleModel = {
    //    opt: 0,
    //};

}(jQuery));
