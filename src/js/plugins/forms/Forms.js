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
    var defaults = { };

    /**
     * Constructor
     */
    $.gx.Forms = function (options) {
        //console.log('$.gx.Forms()');
        this.settings = $.extend( {}, defaults, options );
    };

    /**
     * Prototypes Forms.
     */
    $.gx.Forms.prototype = {
        
        // init
        init: function () {
            //console.log('$.gx.Forms.init()');
            var e = this;

            // 
            // Extend validation methods
            // 
            e.extraValidationMethods();
            
            // just for the demos, avoids form submit
            $.each($('form'), function(index, value){
                var action = $(this).data('act');

                $(this).validate({
                    invalidHandler: function(event, validator) {
                        //console.log('invalid handler');
                        // 'this' refers to the form
                        //var errors = validator.numberOfInvalids();
                    },
                    validHandler: function(event, validator) {
                        //console.log('valid handler');
                        // 'this' refers to the fWorm
                        //var errors = validator.numberOfInvalids();
                    },
                    submitHandler: function(form, event) {
                        event.preventDefault();
                        e.ajaxSubmitWP(form, action);
                    },
                });
                //e.sendController(this, index, value);
            });
        },

        /**
         * Get form values and create  
         * JSON string.
         *
         * @param object field
         * @return JSON object [Name]:[Value]
         */
        getFormValues: function(form) {
            console.log('$.gx.Forms.getFormValues(form)');
            var serializeForm = $(form).not('[type=checkbox]').serialize();
            return serializeForm;
        },

        /**
         * Send form with WP like call
         *
         * @param url server script url
         * @param string type: 'GET', 'POST'
         * @param string action
         * @param string nonce
         */
        ajaxSubmitWP: function(form, action) {
            //console.log('$.gx.Forms.ajaxSubmitWP(form, action)');
            var that = this;

            // Handler for Jquery Ajax
            // http://api.jquery.com/jquery.ajax/
            var request;

            // Abort pendings
            if (request) {
                request.abort();
            }

            // Ajax request
            request = $.ajax({
                type: 'post',
                url: ajax_var.url,
                data:{
                    action : action,
                    content : that.getFormValues(form), // valores del form
                    nonce : ajax_var.nonce
                },
            });

            // Callback done!
            request.done(function (response, textStatus, jqXHR){
                console.log('Hooray, it worked!');
                $(form).trigger('reset');

                $('#form-OK-msg').toggleClass('is_on is_off animate')
                
                var GA_action_value = 12;
                //ga('send','event', 'category', 'action', 'label', value); 
                ga('send', 'event', 'form-generic', 'send', 'form-generic_OK', GA_action_value);
            });

            // Callback fails!
            request.fail(function (jqXHR, textStatus, errorThrown){
                console.log('Oh, it fail!');
                $('#form-KO-msg').toggleClass('is_on is_off animate')

                var GA_action_value = -6;
                ga('send', 'event', 'form-generic', 'send', 'form-generic_KO', GA_action_value);
            });

            // Callback handler that will be called regardless
            // if the request failed or succeeded
            request.always(function () {
                // Reenable the inputs
                // $inputs.prop('disabled', false);
            });
        },

        // 
        // Add jQuery Validation extra 
        // method.
        // https://jqueryvalidation.org/jQuery.validator.addMethod/
        // 
        extraValidationMethods: function(){

            // Check if valid phone or email is provided
            $.validator.addMethod('phoneoremail', function(value, element) {
                if( /[a-z]+@[a-z]+\.[a-z]+/.test( value ) ){
                    return true;
                } else if ( /[0-9]+/.test( value ) ){
                    return true;
                } else{
                    return false;
                }
                //return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@(?:\S{1,63})$/.test( value );
            }, 'Please enter a valid phone or email address.');
        },
    };

    //$.gx.Forms.defaults = {
    //    opt: 0,
    //};
}(jQuery));