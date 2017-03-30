# Scroll to con velocity
Uses [Velocity](http://velocityjs.org/) for replace jQuery scrollTo.

```html
<div class="row">
  <a href="javascript:void(0);" data-scroll-to="#idToScroll">
    Next
  </a>
</div>
<div id="idToScroll" class="row">
    Next scroll
</div>
```


```js
$('#point-6').velocity("scroll", {easing:'easeInOutExpo', duration:300});
```
