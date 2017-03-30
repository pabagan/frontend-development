'use strict';

(function ($) {

    $.gx = $.gx || {};
    

    $.gx.UnitTest = function (options) {        
        this.settings = $.extend( $.gx.UnitTest.OPTIONS, options );
    };

    // screen sizes
    $.gx.UnitTest.OPTIONS = {
        'screenSizes': {
            'xs'  : 480,
            'sm'  : 639,
            'md'  : 940,
            'lg'  : 1200,
            'xl'  : 1600,
            'xxl' : 1900,
        },
    };
    /**
     * UT Prototypes. init() work
     * as a contructor.
     */
    $.gx.UnitTest.prototype = {
                
        /**
         * Print h1-6 info with the h
         */
        printHeadingInfo: function(){
            //console.log('$.gx.UnitTest.printHeadingInfo()');

            var headings = $('h1,h2,h3,h4,h5,h6'),
                hValue = '';


            $.each(headings, function(i, elem){
                // Get heading value
                hValue = this.localName;
                
                // añade valor de h antes de cada h
                // solo a elementos queno tienen id definido
                if($(headings[i]).attr('id') === undefined){
                    $(this).html( $(this).html() + ' <small class="color-grey8 f">' + hValue + '</small>');
                }
            });
        },
        
        //
        // Sliders
        //
        sliders: function(){
            //console.log('$.gx.UnitTest.sliders()');
            // testimonials
            jQuery('.c-testimonials .royalSlider').royalSlider({
                autoHeight: true,
                arrowsNav: false,
                controlNavigation: 'bullets',
                controlNavigationSpacing: 0,
                fadeinLoadedSlide: false,
                imageScaleMode: 'none',
                slidesSpacing: 0,
                usePreloader: false,
                autoPlay: {
                    // autoplay options go gere
                    enabled: true,
                    //delay: 30 * 1000, // 30 seconds
                    delay: 15000, // 30 seconds
                    pauseOnHover: true
                }
            });
            // widgets
            jQuery('.widget .royalSlider').royalSlider({
                autoHeight: true,
                arrowsNav: false,
                controlNavigation: 'bullets',
                controlNavigationSpacing: 0,
                fadeinLoadedSlide: false,
                imageScaleMode: 'none',
                slidesSpacing: 0,
                usePreloader: false 
            });
        },

        // Crear navegación a partir de los Heading
        // con el atributo data-module-title
        navigation: function(){
            //console.log('$.gx.UnitTest.navigation()');
            var navigation = this,
                o = '';

            // Create html link element
            navigation.htmlLink = function(el){
                ////console.log(el);
                var elId = el.attr('id'), 
                    elHtlm = jQuery('#' + elId ).html(),
                    linkHtml = '<li role="presentation"><a href="#' + elId + '">' + elHtlm + '</a></li>';

                ////console.log(linkHtml);
                return linkHtml;
            };
                
            // Create execute
            navigation.create = function(){
                ////console.log('creandoooooooooooooooooooooooooooo');
                // Strart unit nav Wrap
                // Toggle button
                // Strart nav html
                o += '<nav class="row">';
                    o += '<ul class="c-l-block ct-light">';
                        // Loop links
                        $.each(jQuery('[data-module-title]'), function(i){
                            // Add order number to title
                            $(this).html( (i + 1) + '. ' + $(this).html());
                            
                            o += navigation.htmlLink($(this));
                        });
                    o += '</ul>';// close #utNavigation
                o += '</nav>';// close #utNavigation
                
                ////console.log(jQuery('[data-module-title]'));
                ////console.log(o);
                // Inseret element in html
                $('#unitTestBarNav').append(o);
            };
        },
        
        addBorders: function(){   
            var addBorders = this,
                btId = 'ut-add-borders',
                state = 'off'; // use string since localStorage is String
            
            // Create html link element
            addBorders.addCtrl = function(){
                var o = '';
                
                o += '<a class="ut-ctrl" href="javascript:void(0)" id="'+btId+'">';
                    o += '<span class="i-state"></span>';
                    o += 'Borders';
                o += '</a>';

                // add to body
                $('body').append(o);
            };

            // Create html link element
            addBorders.borderize = function(){
                $('body').toggleClass('is_bordered');
                addBorders.stateToggle();
            };


            addBorders.stateToggle = function(){
                state = (state === 'on') ? 'off': 'on';

                // keeps state local to maintain 
                // borders at refresh
                if (typeof(Storage) !== 'undefined') {
                    localStorage.borders = state;
                } 
            };

            // Create toogle button click
            addBorders.clickItem = function(){
                $(document).on('click', '#'+btId, function(){
                    $(this).toggleClass('is_on');
                    addBorders.borderize();
                });
            };

            // Navigation Constructor
            addBorders.init = (function(){
                addBorders.addCtrl();
                addBorders.clickItem();

                // add borders if previously added
                if(localStorage.borders === 'on'){
                    addBorders.borderize();                    
                }
            })();
        },

        hideSeccTitles: function(){   
            var hideSeccTitles = this,
                btId = 'ut-hide-secc-title',
                state = 'off'; // use string since localStorage is String
            
            // Create html link element
            hideSeccTitles.addCtrl = function(){
                var o = '';
                
                o += '<a class="ut-ctrl" href="javascript:void(0)" id="'+btId+'">';
                    o += '<span class="i-state"></span>';
                    o += 'Hide titles';
                o += '</a>';

                // add to body
                $('body').append(o);
            };

            // Create html link element
            hideSeccTitles.hideTitles = function(){
                $('body').toggleClass('is_hide-titles');
                hideSeccTitles.stateToggle();
            };


            hideSeccTitles.stateToggle = function(){
                state = (state === 'on') ? 'off': 'on';

                // keeps state local to maintain 
                // borders at refresh
                if (typeof(Storage) !== 'undefined') {
                    localStorage.borders = state;
                } 
            };

            // Create toogle button click
            hideSeccTitles.clickItem = function(){
                $(document).on('click', '#'+btId, function(){
                    hideSeccTitles.hideTitles();
                });
            };

            // Navigation Constructor
            hideSeccTitles.init = (function(){
                hideSeccTitles.addCtrl();
                hideSeccTitles.clickItem();

                // add borders if previously added
                if(localStorage.borders === 'on'){
                    hideSeccTitles.hideTitles();                    
                }
            })();
        },
        // Crear navegación a partir de los Heading
        // con el atributo data-module-title
        navigation: function(){
            //console.log('$.gx.UnitTest.navigation()');
            var navigation = this,
                o = '';

            // Create html link element
            navigation.htmlLink = function(el){
                ////console.log(el);
                var elId = el.attr('id'), 
                    elHtlm = jQuery('#' + elId ).html(),
                    linkHtml = '<li role="presentation"><a href="#' + elId + '">' + elHtlm + '</a></li>';

                ////console.log(linkHtml);
                return linkHtml;
            };
                
            // Create execute
            navigation.create = function(){
                ////console.log('creandoooooooooooooooooooooooooooo');
                // Strart unit nav Wrap
                // Toggle button
                // Strart nav html
                o += '<nav class="row">';
                    o += '<ul class="c-l-block ct-light">';
                        // Loop links
                        $.each(jQuery('[data-module-title]'), function(i){
                            // Add order number to title
                            $(this).html( (i + 1) + '. ' + $(this).html());
                            
                            o += navigation.htmlLink($(this));
                        });
                    o += '</ul>';// close #utNavigation
                o += '</nav>';// close #utNavigation
                
                ////console.log(jQuery('[data-module-title]'));
                ////console.log(o);
                // Inseret element in html
                $('#unitTestBarNav').append(o);
            };
            
            // Navigation Constructor
            navigation.init = (function(){
                navigation.create();
            })();
        },

        crearListas: function(){
            //console.log('$.gx.UnitTest.crearListas()');
            var crearListas = this;
            
            // Modelo del ejemplo
            crearListas.listModel = [
                {'id': 'linkedin', 'name': 'LinkedIn', 'url': '#' },
                {'id': 'twitter','name': 'Twitter','url': '#'},
                {'id': 'facebook','name': 'Facebook','url': '#'},
                {'id': 'google','name': 'Google+','url': '#'},
                //{'id': 'youtube','name': 'Youtube','url': '#'},
                //{'id': 'vimeo','name': 'Vimeo','url': '#'},
                //{'id': 'behance','name': 'Behance','url': '#'},
                //{'id': 'soundcloud','name': 'SoundCloud','url': '#'},
            ];

            // Crea lista de iconos a partir del modelo
            crearListas.crear = function(element, size){
                //console.log('crearListas.crear');
                var opt = '',
                    listModel = crearListas.listModel;
                
                // Crea lista
                opt += '<ul class="c-l-inline">';
                    // Loop the object
                    for(var i in listModel ){
                        opt += '<li class="c-p-rem-sm bg-grey2 ct-light">';
                            opt += '<a href="' + listModel[i].url + '" target="_blank" title="' + listModel[i].name + '">';
                                opt += '<span class="c-icon-'+size+' i-' + listModel[i].id + '" aria-hidden="true"></span>';
                                opt += '<span class="screen-reader-text">' + listModel[i].name + '</span>';
                            opt += '</a>';
                        opt += '</li>';
                    }
                opt += '</ul>';
                
                ////console.log(opt);

                // Añadir html resultante a elemento
                jQuery(element).html(opt);
                // js puro
                //document.getElementById(element).innerHTML = opt;
            };

            crearListas.init = (function(){
                crearListas.crear('#c-icon-list-xs', 'xs');
                crearListas.crear('#c-icon-list-sm', 'sm');
                crearListas.crear('#c-icon-list-md', 'md');
                crearListas.crear('#c-icon-list-lg', 'lg');
                crearListas.crear('#c-icon-list-xl', 'xl');
            })();
        },
                        

        /**
         *
         * Imprimir tamaño de pantalla
         *
         */
        printScreenSize: function(){
            //console.log('$.gx.UnitTest.printScreenSize()');
                        
            var printScreenSize = this;

            // window current width
            printScreenSize.getWindowWidth = function(){
                return $(window).width();

            };
            
            // current screen size
            printScreenSize.getSizeName = function(){
                var size = 'XS';
                ////console.log("Window width: " + printScreenSize.getWindowWidth());
                if(printScreenSize.getWindowWidth() > this.settings.screenSizes.xxl){
                    size = 'XXL';
                } else if(printScreenSize.getWindowWidth() > this.settings.screenSizes.xl){
                    size = 'XL';
                } else if (printScreenSize.getWindowWidth() > this.settings.screenSizes.lg){
                    size = 'LG';
                } else if (printScreenSize.getWindowWidth() > this.settings.screenSizes.md){
                    size = 'MD';
                } else if (printScreenSize.getWindowWidth() > this.settings.screenSizes.sm){
                    size = 'SM';
                }

                return size;
            };

            // HTML element
            printScreenSize._html = function() {
                var o = '';
                // create element
                o +='<div class="ut-ctrl" id="screen-size" role="alert">';
                o += printScreenSize.getSizeName() + ': ';
                o += printScreenSize.getWindowWidth() + 'px';
                o +='</div>';

                return o;
            };

            // Print element & resizable
            printScreenSize.printElem = function(){
                // Remove previous print
                if(jQuery('#screen-size').length > 0){
                    jQuery('body').find('#screen-size').remove();
                }
                // resize
                // append size
                $('body').append(printScreenSize._html());
                
                // Resizable
                //window.addEventListener('resize', printScreenSize.printElem);
            };


            // Screen resize observer
            printScreenSize.init =  (function(){
                printScreenSize.printElem();
            })();
        }, 

        //  Debounze from Underscores.js
        debounce: function(func, wait, immediate) {
            //console.log('$.gx.UnitTest.debounce()');
            var timeout;
            return function() {
                var context = this, args = arguments;
                var later = function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        },

        /**
         *
         * Imprimir colores de tallas
         *
         */
        printSizeColors: function(){
            var sizeColors = this;
            // HTML element
            sizeColors._html = function(){
                var o = '';
                
                // create element
                o +='<div class="ut-ctrl" id="sizes-colors" role="alert">';
                o +='<span class="size-color-wrap"><span class="size-color color-xxs"></span>XXS</span>';
                o +='<span class="size-color-wrap"><span class="size-color color-xs"></span>XS</span>';
                o +='<span class="size-color-wrap"><span class="size-color color-sm"></span>SM</span>';
                o +='<span class="size-color-wrap"><span class="size-color color-md"></span>MD</span>';
                o +='<span class="size-color-wrap"><span class="size-color color-lg"></span>LG</span>';
                o +='<span class="size-color-wrap"><span class="size-color color-xl"></span>XL</span>';
                o +='<span class="size-color-wrap"><span class="size-color color-xxl"></span>XXL</span>';
                o +='</div>';

                return o;
            };

            // add
            sizeColors.printElem = function(){
                // append size
                $('body').append(sizeColors._html());
                return;
            };

            sizeColors.init = (function(){
                sizeColors.printElem();
            })();
        }, 
        

        //
        // Crear post
        //
        crearPosts: function(){
            //console.log('$.gx.UnitTest.crearPost()');

            // Minified post content
            var titles = [
                'Feel the force',
                'Hands on for Jabba the Hutt',
                'You must unlearn what you have learned',
                'Will you walk into my parlour? - said the Spider to the Fly',
            ];
            var content = '<h1 class="entry-title c-m-bottom-0">' + get_random_title() + '</h1><p class="entry-meta color-grey7">By Paco Doe / Jan 4, 2160 / Cool Category<p>For my ally is the Force, and a powerful ally it is. Life creates it, makes it grow. Its energy surrounds us and binds us. Luminous beings are we, not this crude matter. You must feel the Force around you; here, between you, me, the tree, the rock, everywhere, yes. Even between the land and the ship.<p>Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering. Patience you must have my young padawan.<p>For my ally is the Force, and a powerful ally it is. Life creates it, makes it grow. Its energy surrounds us and binds us. Luminous beings are we, not this crude matter. You must feel the Force around you; here, between you, me, the tree, the rock, everywhere, yes. Even between the land and the ship. Tú pones el proyecto, la filosofía y las metas. Nosotros ponemos la experiencia, la ilusión.<blockquote>Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering. Patience you must have my young padawan.<cite>Presidente - Founder & tiaco</cite></blockquote><p>For my ally is the Force, and a powerful ally it is. Life creates it, makes it grow. Its energy surrounds us and binds us. Luminous beings are we, not this crude matter. You must feel the Force around you; here, between you, me, the tree, the rock, everywhere, yes. Even between the land and the ship.<p class=p-lg>Párrafo LG For my ally is the Force, and a powerful ally it is. Life creates it, makes it grow. Its energy surrounds us and binds us. Luminous beings are we, not this crude matter. You must feel the Force around you; here, between you, me, the tree, the rock, everywhere, yes. Even between the land and the ship.<p>Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering. Patience you must have my young padawan.<p class=p-sm>Párrafo SM For my ally is the Force, and a powerful ally it is. Life creates it, makes it grow. Its energy surrounds us and binds us. Luminous beings are we, not this crude matter. You must feel the Force around you; here, between you, me, the tree, the rock, everywhere, yes. Even between the land and the ship.<p>La lista normalmente se abre con un parrafete de intro:<ol><li>El caos. Tabulación: 32.<li>La destrucción.<li>La procrastinación:<ol><li>El caos. Tabulación: 48.<li>La destrucción.<li>La destrucción.</ol><li>La procrastinación:<ol><li>El caos. Tabulación: 48.<li>La destrucción.<li>La destrucción.</ol></ol><p>For my ally is the Force, and a powerful ally it is. Life creates it, makes it grow. Its energy surrounds us and binds us. Luminous beings are we, not this crude matter. You must feel the Force around you; here, between you, me, the tree, the rock, everywhere, yes. Even between the land and the ship.<h2>Patience you must have my young padawan</h2><p>Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering. Patience you must have my young padawan.<p>For my ally is the Force, and a powerful ally it is. Life creates it, makes it grow. Its energy surrounds us and binds us. Luminous beings are we, not this crude matter. You must feel the Force around you; here, between you, me, the tree, the rock, everywhere, yes. Even between the land and the ship. Patience you must have my young padawan. Tú pones el proyecto, la filosofía y las metas.<h3>Patience you must have my young padawan</h3><p>Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering. Patience you must have my young padawan.<p>Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering. Patience you must have my young padawan.<h4>Patience you must have my young padawan</h4><p>Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering. Patience you must have my young padawan.<h5>Patience you must have my young padawan</h5><p>For my ally is the Force, and a powerful ally it is. Life creates it, makes it grow. Its energy surrounds us and binds us. Luminous beings are we, not this crude matter. You must feel the Force around you; here, between you, me, the tree, the rock, everywhere, yes. Even between the land and the ship.<p>Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering. Patience you must have my young padawan.<h6>Patience you must have my young padawan</h6><p>Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering. Patience you must have my young padawan.<p>For my ally is the Force, and a powerful ally it is. Life creates it, makes it grow. Its energy surrounds us and binds us. Luminous beings are we, not this crude matter. You must feel the Force around you; here, between you, me, the tree, the rock, everywhere, yes. Even between the land and the ship.';
            var excerpts = [
                'Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering. Patience you must have my young padawan...(via Yoda)',
                'For my ally is the Force, and a powerful ally it is. Life creates it, makes it grow. Its energy surrounds us and binds us. Luminous beings are we, not this crude matter. You must feel the Force around you; here, between you, me, the tree, the rock, everywhere, yes. Even between the land and the ship.',
            ];
            
            var btnText = 'Read more';

            function get_random_title(){
                return titles[Math.floor(Math.random()*titles.length)];
            }
            
            function get_random_exceprt(){
                return excerpts[Math.floor(Math.random()*excerpts.length)];
            }

            function archive_post(title, excerpt, btnText, author){
                var o = '';
                o += '<article id="post-007">';
                    o += '<header class="entry-header">';
                        o += '<a class="entry-featured-content" href="#" title="WEF" aria-hidden="true">';
                            o += '<img class="c-img" src="assets/img/640x360.png">';
                        o += '</a>';
                        
                        // title
                        o += '<h3 class="entry-title">';
                            o += '<a href="#" rel="bookmark">';
                                o += title;
                            o += '</a>';
                        o += '</h3>';

                        // metas
                        o += '<p class="entry-meta">';
                            o += '<span class="meta-item meta-author">' + author + '</span> / ';
                            o += '<span class="meta-item meta-date">Jan 4, 2160</span> / ';
                            o += '<span class="meta-item meta-cat">Cool category</span>';
                        o += '</p>';
                    o += '</header><!-- .entry-header -->';

                    // content
                    o += '<div class="entry-content">';
                        o += '<p>' + excerpt + '.</p>';
                    
                        o += '<div class="view-article-wrap">';
                            o += '<p>';
                                o += '<a class="view-article c-btn c-btn-sm" href="#">';
                                    o += btnText;
                                o += '</a>';
                            o += '</p>';
                        o += '</div><!-- .view-article-wrap -->';
                    o += '</div><!-- .entry-content -->';
                    
                    // Footer
                    o += '<footer>';
                    o += '</footer><!-- .entry-footer -->';
                o += '</article><!-- #post-## -->';
               
                return o;
            }


            return {
                archive: function(wrapperClass, nPosts, postBoxClass){

                    //console.log('$.gx.UnitTest.crearPost().archive()');
                    //console.log(wrapperClass);
                    //console.log(nPosts);
                    //console.log(nPosts);
                    //console.log(postBoxClass);
                    var o = '';

                    // Post Wrapper
                    o += '<div class="' + wrapperClass + '">';
                        // Loop to create posts
                        for (var i = 0; i < nPosts; i++) {
                            o += '<div class="' + postBoxClass + ' bg-grey' + ((i % 9) + 3) + '">';
                                o += archive_post(get_random_title(),get_random_exceprt(), 'Read more', 'Juani Doe');
                            o += '</div>';
                        }
                    o += '</div>';
                    
                    return o;
                },

                single: function(wrapperClass, postBoxClass){
                    //console.log('$.gx.UnitTest.crearPost().single()');
                    var o = '';
                    
                    // Single Wrapper
                    o += '<div class="' + wrapperClass + '">';
                        o += '<div class="' + postBoxClass + '">';
                            o += content;
                        o += '</div>';
                    o += '</div>';
                    
                    return o;
                }
            };
        },    

        init: function(){
        },


        /**
         * Update observer method to 
         * trigger waypoints update.
         * 
         * @return void 
         */
        update: function(){
            this.init();
        },
    };
}(jQuery));

// Crear entradas
jQuery(document).ready(function ($) {
    $(window).bind("load", function() {
        var unitTest = new $.gx.UnitTest();
        
        unitTest.init();
        unitTest.navigation();
        unitTest.crearListas(); 
        unitTest.addBorders(); 
        unitTest.hideSeccTitles(); 
        //unitTest.printHeadingInfo();               // Imprime información sobre elementos html
        //unitTest.printSizeColors();
        unitTest.printScreenSize();

        // 
        // Reprint window size on resize
        // 
        var printSizeScreenReload = debounce(function() {
            unitTest.printScreenSize();
        }, 100);

        window.addEventListener('resize', printSizeScreenReload);

        // 
        // Crear posts
        // 
        var crearPosts = unitTest.crearPosts(),
            bowWrap, postBoxClass;
        
        // archive posts
        var postsWrapClass = 'c-masonry';
        var postBoxClass = 'c-masonry-item c-entry col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 c-p-sm';
        var archivePosts = crearPosts.archive(postsWrapClass, 12, postBoxClass);
        var relatedBoxClass = 'c-masonry-item c-entry col-xs-12 col-md-6 col-lg-6 col-xl-3c-p-sm';
        var relatedPosts = crearPosts.archive(postsWrapClass, 4, relatedBoxClass);
        
        $('#ut-post-archives').html(archivePosts);
        $('#ut-related-post').html(relatedPosts);

        // single post
        var singleWrapClass = 'container';
        var singleClass = 'c-single entry-single';
        var singlePosts = crearPosts.single(singleWrapClass, singleClass);
        
        $('#ut-post-single').html(singlePosts);
    });
});