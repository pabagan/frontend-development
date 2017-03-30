# Velocity Toggler
Toggle in/out aplying Velocity and VelocityUI animations.

* [Velocity](http://velocityjs.org/) for toggle animation..
* [VelocityUI](http://velocityjs.org/#uiPack) prebuilt fx plugin.

## The HTML
We need two html elements to set the toggle animation: toggle button & toggle content.

#### Toggle button

An html element with attributes:

* `data-toggle-velocity`: activate toogle velocity fx.
* `aria-controls="element-id"`: id of the toggled html element.
* `aria-expanded="true"`: controls state of the fx (true/false).
* `class="is_hide/is_show"`: depending on animation state. Class is XXX by default so no need to add if XXX is the default state.

###### example
```html 
<!-- Toggler button -->
<button data-toggle-velocity aria-expanded="true" aria-controls="velocityTogglerCt" id="velocityToggler" type="submit" class="c-btn btn-1">
    Toggle Velocity Button
</button>
```


#### Toggle content
Showed in/out content managed via toggle-button `aria-controls="element-id"` html element with attributes:

* `id="element-id"`: id of the toggled html element.
* `class="is_hide/is_show"`: depending on animation state. Class is XXX by 

###### example

```html 
<!-- Toggled content -->
<div id="velocityTogglerCt" class="bg-grey2 col-xs-9">
    Toggle Velocity Content
</div>
```


## The JS
Need to import Toggle.velocityUI.js into the html (skip explain). Then into `main.js`.

```js
var velocityTogglerSelector = '[data-toggle-velocity]';
var velocityToggler = new $.gx.Toggle.velocityUI(velocityTogglerSelector);
```

### Setting animate in/out
By default applies default fx defined as:
```js
// Toggle.velocityUI.js
var velocityTogglerDefaults = {
    animateDuration: 250,
    animateDelay: 0,
    animateIn: 'slideLeftBigIn',
    animateOut: 'slideLeftBigOut',
};
```

To change the default animation pass a new defaults as 2nd argument on Toggle.velocityUI constructor like this:
```js
var velocityTogglerSelector = '[data-toggle-velocity]';
// Toggle.velocityUI.js
var velocityTogglerFx = {
    animateDuration: 300,
    animateDelay: 0,
    animateIn: 'flipXIn',
    animateOut: 'flipXIn',
};
var velocityToggler = new $.gx.Toggle.velocityUI(velocityTogglerSelector, velocityTogglerFx);
```



###### example main.js with Toggle.velocityUI with override animations.

```js
'use strict';

/**!
 * UI Main program
 * 
 * @author @pabagan
 */
jQuery(document).ready(function ($) {
    $(window).bind("load", function() {
        //  Set toggle in/out configuration
        //  more fx: http://velocityjs.org/#uiPack 
        var velocityTogglerFx = {
            animateIn: 'flipXIn',
            animateOut: 'flipXOut',
            animateDuration: 350,
            animateDelay: 0,
        };

        // Set animation
        var velocityToggler = new $.gx.Toggle.velocityUI('[data-toggle-velocity]', velocityTogglerFx);
    });
});
``` 

