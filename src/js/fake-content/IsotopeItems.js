'use strict';

/**
 * Create Fake isotope cards
 * 
 * @author @pabagan
 * 
 */
(function ($) {
  // Task model
  var MODELS = {
    categories : {
      1 : 'meat',
      2 : 'vegetable',
      3 : 'fruit',
    },
    entries : [
      {
        'name': 'Apple',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id elementum orci. Quisque facilisis consequat sem, sed scelerisque lorem viverra at. Integer a tristique metus, a hendrerit massa. Ut bibendum mollis arcu.',
        'link_to': '#',
        'category':3,
      },
      {
        'name': 'Aubergine',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id elementum orci. Quisque facilisis consequat sem, sed scelerisque lorem viverra at. Integer a tristique metus, a hendrerit massa. Ut bibendum mollis arcu.',
        'link_to': '#',
        'category':2,
      },
      {
        'name': 'Banana',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id elementum orci. Quisque facilisis consequat sem, sed scelerisque lorem viverra at. Integer a tristique metus, a hendrerit massa. Ut bibendum mollis arcu.',
        'link_to': '#',
        'category':3,
      },
      {
        'name': 'Broccoli',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id elementum orci. Quisque facilisis consequat sem, sed scelerisque lorem viverra at. Integer a tristique metus, a hendrerit massa. Ut bibendum mollis arcu.',
        'link_to': '#',
        'category':2,
      },
      {
        'name': 'Chicken',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id elementum orci. Quisque facilisis consequat sem, sed scelerisque lorem viverra at. Integer a tristique metus, a hendrerit massa. Ut bibendum mollis arcu.',
        'link_to': '#',
        'category':1,
      },
      {
        'name': 'Orange',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id elementum orci. Quisque facilisis consequat sem, sed scelerisque lorem viverra at. Integer a tristique metus, a hendrerit massa. Ut bibendum mollis arcu.',
        'link_to': '#',
        'category':3,
      },
      {
        'name': 'Beef',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id elementum orci. Quisque facilisis consequat sem, sed scelerisque lorem viverra at. Integer a tristique metus, a hendrerit massa. Ut bibendum mollis arcu.',
        'link_to': '#',
        'category':1,
      },
      {
        'name': 'Zuchinni',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id elementum orci. Quisque facilisis consequat sem, sed scelerisque lorem viverra at. Integer a tristique metus, a hendrerit massa. Ut bibendum mollis arcu.',
        'link_to': '#',
        'category':2,
      },
    ],
  };

  /**
   * IsotopeItems plugin
   */
  $.gx = $.gx || {};

  var defaults = {};

  $.gx.IsotopeItems = function (element, options) {
    this.settings = $.extend( {}, defaults, options );
    //console.log('$.gx.IsotopeItems(element, options)');
    this.element = element;
    this.categories = MODELS.categories;
    this.entries = MODELS.entries;
  };

  /**
   * IsotopeItems Prototypes.
   */
  $.gx.IsotopeItems.prototype = {

    // Inizialize.
    init: function () {
      $(this.element).html(this.itemsHTML());
    },

    /**
     * Make post append into html a list
     * with the posts
     * 
     * @return sring HTML isotope items
     */
    itemsHTML: function () {
      var category, categoryId;
      var o = '';

      // loop  model to build
      for (var i = 0; i < this.entries.length; i++) {
        categoryId = this.entries[i].category;
        category = this.categories[categoryId];

        o +='<div class="isotope-item '+category+' col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">';
          o +='<article class="c-card bg-f">';
            o +='<header class="c-card__header">';
              o +='<div class="c-card__thumb__wrap">';
                o +='<img class="c-card__thumb" src="assets/img/760-429.jpg">';
              o +='</div>';
              o +='<div class="c-card__subheader">';
                o +='<h2 class="c-card__title">'  +this.entries[i].name+ '</h2>';
                o +='<div class="c-card__metas">';
                  o +='<a class="c-card__category c-btn c-btn-sm c-btn-'+categoryId+'">'  +category+ '</a>';
                o +='</div>';
              o +='</div>';
            o +='</header> '; 
            o +='<main class="c-card__content">';
              o +=''  +this.entries[i].content+ '';
            o +='</main>';
            o +='<footer class="c-card__footer">';
              o +='<a class="c-card__infolink color-grey3" href="'+this.entries[i].link_to+'">';
                o +='<span class="color-'+categoryId+' c-icon-xs i-arrow-right" aria-hidden="true">';
                o +='</span>';
                o +='<span class="c-h-xs">';
                  o +='More Info';
                o +='</span>';
              o +='</a>';
            o +='</footer>';
          o +='</article>';
        o +='</div>';
      }
      o +='</div>';
      
      return o;
    }
  };
}(jQuery));
