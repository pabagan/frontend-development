# Appear
Animates elements when showed at viewport.
Using:

* [Waypoints](http://imakewebthings.com/waypoints/) to detect when elements displays at viewport. 
 * [Velocity](http://velocityjs.org/) animate in/out elements.
 * [VelocityUI](http://velocityjs.org/#uiPack) prebuilt fx's.


## Demo appear

Apply to a lay: 
* `data-appear`
* `data-offset="100%"`
* `data-animation="animation duration delay stagger"` apply any VelocityUI fx.

```html
<div class="c-container is_v-center pv-lg textcenter">
  <h1 class="jumbo c-appear" data-appear data-offset="100%" data-animation="slideDownBigIn 500 750">
    Hey there! Look how cool we do!
  </h1>
</div>
```

## Demo appear children
Apply to a parent lay: 
* `data-appear-children`
* `data-offset="100%"`
* `data-animation="animation duration delay stagger"` apply any VelocityUI fx.

```html
<div class="c-row-sm-12 c-p bg-grey6">
  <div class="is_v-center ct-light" data-appear-children data-animation="flipBounceXIn 500 0 250">
    <h3>Animate Children</h3>
    <p>Child 1</p>
    <p>Child 2</p>
    <p>Child 3</p>
    <p>Child 4</p>
    <p>Child 5</p>
    <p>Child 6</p>
  </div>
</div>
```

Can also use data-appear-children to animate children. Same data-animation="animation duration delay stagger" would be applied to children. Eg: data-animation="slideLeftBigIn 550 500".
