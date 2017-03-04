/**
 * Events
 * ga('send','event', 'category', 'action', 'label', value); 
 * 
 * see: https://developers.google.com/analytics/devguides/collection/analyticsjs/events?hl=es
 * 
 * Elements / type / Oblig / Desc
 * 
 * Category     String  Sí  Normalmente, es el objeto con el que se ha interactuado (por ejemplo, un botón).
 * Action   String  Sí  Representa el tipo de interacción (por ejemplo, un clic).
 * Label    String  No  Resulta útil para la clasificación de eventos (por ejemplo, botones de navegación).
 * Value    Number  No  Los valores no deben ser negativos. Resulta útil para pasar recuentos (por ejemplo, cuatro veces).
 * 
 * @credit plugin boilerplate (@ajpiano)
 */

 'use strict';
(function ($) {

    $.gx = $.gx || {};

    // GA sizes
    var defaults = {
    };

    $.gx.GA = function (options) {
        //console.log('$.gx.GA()');
        this.settings = $.extend( {}, defaults, options );  
        this.url = document.location;  
    };   

    /**
     * Prototypes GA.
     */
    $.gx.GA.prototype = {
        
        // Inizialize.
        // @return void
        init: function () {
            console.log('$.gx.GA.init()');
            this.sharePost();
            this.visitSocialNetwork();
            this.form1stClick();
            //this.formSubmit();
        },

        form1stClick: function(){
            // Carga formulario de contacto genérico
            $('#c-contact-form input, #c-contact-form textarea').on('click', function(event){
                console.log('Event triggered!!');
                ga('send', 'event', 'form-generic', 'load', 'form-1st_click', 3);
            });
        },

        formSubmit: function(){
            // Carga formulario de contacto selección
            // hecho en la logica del submit por AJAX 
            // en Scripts
        },

        sharePost: function(){
            var e = this;

            // linkedin
            $('.entry-share .i-linkedin').on('click', function(event){
                console.log('Event triggered!!');
                ga('send', 'social', 'LinkedIn', 'share', e.url );
            });

            // twitter
            $('.entry-share .i-twitter').on('click', function(event){
                console.log('Event triggered!!');
                ga('send', 'social', 'Twitter', 'share', e.url);
            });

            // facebook
            $('.entry-share .i-facebook').on('click', function(event){
                console.log('Event triggered!!');
                ga('send', 'social', 'Facebook', 'share', e.url);
            });

            // google
            $('.entry-share .i-google').on('click', function(event){
                console.log('Event triggered!!');
                ga('send', 'social', 'Google+', 'share', e.url);
            });        
        },

        visitSocialNetwork: function(){
            var e = this;
            // linkedin
            $('#page-social-links .i-linkedin').on('click', function(event){
                console.log('Event triggered!!');
                ga('send', 'social', 'LinkedIn', 'visitar', e.url);
            });

            // twitter
            $('#page-social-links .i-twitter').on('click', function(event){
                console.log('Event triggered!!');
                ga('send', 'social', 'Twitter', 'visitar', e.url);
            });

            // facebook
            $('#page-social-links .i-facebook').on('click', function(event){
                console.log('Event triggered!!');
                ga('send', 'social', 'Facebook', 'visitar', e.url);
            });

            // google
            $('#page-social-links .i-google').on('click', function(event){
                console.log('Event triggered!!');
                ga('send', 'social', 'Google+', 'visitar', e.url);
            });
            
            // RSS
            $('#page-social-links .i-rss').on('click', function(event){
                console.log('Event triggered!!');
                ga('send', 'social', 'RSS', 'visitar', e.url);
            });
            
            // Twitter Widget (Blog single + page)
            $('#page-social-links  .twitter_widget a').on('click', function(event){
                console.log('Event triggered!!');
                ga('send', 'social', 'Twitter', 'visitar', e.url);
            });
        },
    };

    //$.gx.GA.defaults = {
    //    opt: 0,
    //};
}(jQuery));