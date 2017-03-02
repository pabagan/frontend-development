# Masonry
Interface for [Desandro Masonry](http://masonry.desandro.com/).

## Use

##### js
At main.js
```js
jQuery(document).ready(function ($) {
    var masonry = new $.gx.Masonry('.c-grid');
    // ass extra observer to set on/off depending 
    // on screen.
    screenSizeChange.addObserver(masonry);
});
```


##### html
```html
<div class="c-masonry">
    <div class="c-masonry-item"></div>
    <div class="c-masonry-item"></div>
    <div class="c-masonry-item"></div>
    <div class="c-masonry-item"></div>
    <div class="c-masonry-item"></div>
</div>
