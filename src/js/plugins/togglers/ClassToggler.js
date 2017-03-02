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
        onClass: 'is_on',       // class to toggle
        offClass: 'is_off',         // class to toggle
    };
    
    $.gx.Toggle.classes = function (selector, options) {
        //console.log('$.gx.Toggle.classes(selector, options)');
        this.selector = selector;
        this.opened = [];
        this.settings = $.extend( {}, defaults, options );
        //var closeOnClickDocument = new ObserverSubject();
        //closeOnClickDocument.addObserver(appear);
        //windowResize.notify();
    };


    /**
     * VelocityToggler Prototypes.
     */
    $.gx.Toggle.classes.prototype = {
        // init
        init: function () {
            //console.log('$.gx.Toggle.classes.init()');
            var that = this;

            // click on toggle bt gets button #id
            // and toggle
            $(that.selector).on('click', function(){
                //console.log('$.gx.Toggle.classes click()');              
                that.toggle(this);
            });

            // TODO:
            // Outern click triggers close
            //$(document).on('click', function (e) {
                //that.closeOpened(e);
            //});

        },

        // toggle
        toggle: function(element){
            //console.log('$.gx.Toggle.classes.toggle()');
                        
            var that = this,
                $element = $(element),
                $target = this.getTarget($element),
                state = this.getState($element),
                fxDuration = 100;

            // Toggler class timeout
            setTimeout(function(){
                // Add/pop to opened
                if(state === 'false'){
                    that.opened.push(element);
                } else {
                    var index = that.opened.indexOf(element);
                    if (index > -1) {
                        that.opened.splice(index, 1);
                    }
                }

                // toggle state value and set 
                // new state.
                state = (state == 'false') ? 'true': 'false';
                that.setState($element, state);
                // add animate class to active animations 
                // and toggle classes to target.
                $target.addClass('animate');
                $target.toggleClass(that.settings.onClass + ' ' + that.settings.offClass);
                

            }, fxDuration);
        },

        // return element state from
        getState: function($element){
            return $element.attr('aria-expanded');
        },
        
        // 
        setState: function($element, state){
            $element.attr('aria-expanded', state);
        }, 

        // get target
        // @return jQuery target object
        getTarget: function($element){
            var targetId = $element.attr('aria-controls');
            
            return $('#' + targetId);
        },
        // TODO:
        closeOpened: function(e){
            console.log('');
            console.log(this.opened);

            for (var i = 0; i < this.opened.length; i++) {
                var element = this.opened[i];
                var $element = $(this.opened[i]);
                console.log(element.id);
                //console.log($element);
                console.log('target', e.target);
                console.log('element is e.target', $("#nav-toggle c-icon-sm").is(e.target));
                if (!$element.is(e.target) && !$element.is("#nav-toggle c-icon-sm") ) {
                    console.log('cerrandooooooooooooooooooooooooooooooooooooo');
                    //if (!$element.is(e.target) && !$target.is(e.target) && $target.has(e.target).length === 0) {
                    this.toggle(this.opened[i]);
                }
            }
        },
    };

    // This works as class variables
    //$.gx.Toggle.classes.toggleModel = {
    //    opt: 0,
    //};

}(jQuery));
