/**
 * Sliders using OwlCarousel 2
 *
 * @see  https://owlcarousel2.github.io/OwlCarousel2/demos/responsive.html
 * 
 * @credit plugin boilerplate (@ajpiano)
 */

 'use strict';
(function ($) {

    $.gx = $.gx || {};

    // Sliders sizes
    var defaults = {
        // Most important owl features
        //items : 1,
        //itemsCustom : false,
        //itemsDesktop : [1199,4],
        //itemsDesktopSmall : [980,3],
        //itemsTablet: [768,2],
        //itemsTabletSmall: false,
        //itemsMobile : [479,1],
        //singleItem : true,
        //itemsScaleUp : false,
     
        //Basic Speeds
        //slideSpeed : 200,
        //paginationSpeed : 800,
        //rewindSpeed : 1000,
     
        //Autoplay
        //autoPlay : true,
        //stopOnHover : false,
     
        // Navigation
        //navigation : false,
        //navigationText : ["prev","next"],
        //rewindNav : true,
        //scrollPerPage : false,
     
        //Pagination
        //pagination : true,
        //paginationNumbers: false,
     
        // Responsive 
        //responsive: true,
        //responsiveRefreshRate : 200,
        //responsiveBaseWidth: window,
     
        // CSS Styles
        //baseClass : "owl-carousel",
        //theme : "owl-theme",
     
        //Lazy load
        //lazyLoad : false,
        //lazyFollow : true,
        //lazyEffect : "fade",
     
        //Auto height
        //autoHeight : false,
     
        //JSON 
        //jsonPath : false, 
        //jsonSuccess : false,
     
        //Mouse Events
        //dragBeforeAnimFinish : true,
        //mouseDrag : true,
        //touchDrag : true,
     
        //Transitions
        //transitionStyle : false,
     
        // Other
        //addClassActive : true,
     
        //Callbacks
        //beforeUpdate : false,
        //afterUpdate : false,
        //beforeInit: false, 
        //afterInit: false, 
        //beforeMove: false, 
        //afterMove: false,
        //afterAction: false,
        //startDragging : false,
        //afterLazyLoad : false,
    };

    $.gx.Sliders = function (selector, options) {
        //console.log('$.gx.Sliders()');
        this.selector = selector;
        this.settings = $.extend( {}, defaults, options );  
    };
    

    /**
     * Prototypes Sliders.
     */
    $.gx.Sliders.prototype = {
        
        // Inizialize.
        // @return void
        init: function () {
            //console.log('$.gx.Sliders.init()');
            $(this.selector).owlCarousel(this.settings);
        },

        // Update used by observer update().
        // @return void
        update : function(){
            //console.log('$.gx.Sliders.update()');
            this.init();
        },
    };

    //$.gx.Sliders.defaults = {
    //    opt: 0,
    //};
}(jQuery));