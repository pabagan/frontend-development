'use strict';

/**!
 * UI Main program
 * 
 * @author @pabagan
 * @return void 
 */
jQuery(document).ready(function ($) {
    
    // Plugins Settings
    var settings = {
        'sliderA': {
            //navigation : true, // Show next and prev buttons
            items : true,
            autoHeight : true,
            loop : true,
            slideSpeed : 300,
            //Autoplay
            //autoplay : true,
            autoplay: true,
            autoplayHoverPause: true,
            singleItem:true,
        },
        'velocityToggler': {
            animateIn: 'slideRightIn',
            animateOut: 'slideRightOut',
            animateDuration: 350,
            animateDelay: 0,
        },
        'animations': {
            activateAt: 'lg', // cambiar a lg
        },

        'appear': {
            activateAt: 'lg', // cambiar a lg
        },
        'appearChilds': {
            animateChilds: true,
            activateAt: 'lg', // cambiar a lg
        },
        'masonry': {
            activateAt: 'md',
        },
        'fitChildren': {
            activateAt: 'sm',
        },

        'fitChildrenMd': {
            activateAt: 'md',
        },
        'forms': {
            'clientSideValidation': true,
        },

        // buggy
        //'parallaxBG': { activateAt: 'lg',},
    };

    // instances
    var windowResize = new ObserverSubject();
    var animations = new $.gx.Animations(settings.animations);
    var appear = new $.gx.Appear('[data-appear]', settings.appear);
    var forms = new $.gx.Forms(settings.forms);
    var appearChilds = new $.gx.Appear('[data-appear-children]', settings.appearChilds);
    var classToggler = new $.gx.Toggle.classes('[data-toggle-classes]');
    var fitChildren = new $.gx.FitChildren('[data-fit-children]', settings.fitChildren);
    var fitChildrenMd = new $.gx.FitChildren('[data-fit-children-md]', settings.fitChildrenMd);
    var masonry = new $.gx.Masonry('.c-masonry', settings.masonry);
    var scrollTo = new $.gx.ScrollTo('[data-scroll-to]');
    var screen = new $.gx.Screen();
    var googleAnalytics = new $.gx.GA();

    var sliderA = new $.gx.Sliders('.owl-carousel', settings.sliderA);
    var velocityToggler = new $.gx.Toggle.velocityUI('[data-toggle-velocity]', settings.velocityTogglerOptions);
    

    // Superfish
    $('.app-nav__list, .menu, .nav, .c-nav-bar, .c-nav-col').superfish({
        animation: { height:'show' },
        animationOut: { height:'hide' },
        delay:       1200,
        pathClass:  'current',
    });


    // 
    // 
    // Window load loads.
    // 
    // 
    $(window).bind('load', function() {
        // inits
        classToggler.init();        // class toggler
        velocityToggler.init();     // Velocity toggler fx
        scrollTo.init();            // Velocity scrollTo
        fitChildren.init();         // note fit chindren before appear
        fitChildrenMd.init();       // note fit chindren before appear
        animations.init();          // appear
        forms.init();               // forms validation
        appear.init();              // appear
        appearChilds.init();        // appear childs
        sliderA.init();             // Slider A type
        //parallaxBG.init();        // Parallax BG
        googleAnalytics.init();
        // 
        // Masonry. Needs to work here to 
        // perform with JS appened html. 
        // Otherwise we get error.
        masonry.init();
    }); // end of window load


    // Elements which reloads on 
    // on window resize.
    windowResize.addObserver(appear);
    windowResize.addObserver(appearChilds);
    //windowResize.addObserver(parallaxBG);
    windowResize.addObserver(fitChildren);
    windowResize.addObserver(fitChildrenMd);
    windowResize.addObserver(masonry);
    windowResize.addObserver(screen);

    // Elements which deactivate/activate
    // at certain window size (xs, sm, ..).
    //windowSizeResize.addObserver();

    // 
    // screen resize event notify 
    // observers.
    // 
    var windowResizeFn = debounce(function() {
        // Notify resize observers
        windowResize.notify();
    }, 300);

    window.addEventListener('resize', windowResizeFn);   

    // 
    // Detect if tel link not supported
    // to avoid links.
    // 
    var is_phone = (
        (/iphone|android|ie|blackberry|fennec/).test(navigator.userAgent.toLowerCase()) && 
        'ontouchstart' in document.documentElement
    );

    $('a[href*="tel:"]').on('click', function(e){
        if(!is_phone){
            e.preventDefault();
        }
    });
    
    // 
    // Close parent lay
    // 
    $('[data-close-parent]').on('click', function(){
        $(this).parent().addClass('animate').toggleClass('is_on is_off');
    });
});
