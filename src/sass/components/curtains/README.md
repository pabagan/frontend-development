# Curtain lays
Lays that appear inside other lays on hover or click event. Need a wrapper with `c-curtain-ct` and a content with `c-curtain c-curtain--[t|r|b|l]`.

To deal with javascript a controller should toggleClass `is_on` at `c-curtain` lay.

## html
```html
<div class="c-curtain-ct c-col-xs-6 c-col-lg-3 bg-grey8">
    <div class="c-curtain--r bg-4 ct-light textcenter">
      <h3 class="is_v-center">Curtain rigth</h3>
    </div>
</div>
```

```html 
<div class="c-row">
  <div class="c-curtain-ct c-col-xs-6 c-col-lg-3 bg-grey7 p-xl">
    <div class="c-curtain c-curtain--t bg-3 ct-light textcenter">
      <h3 class="is_v-center">Curtain top</h3>
    </div>
  </div>
  <div class="c-curtain-ct c-col-xs-6 c-col-lg-3 bg-grey8 p-xl">
    <div class="c-curtain c-curtain--r bg-4 ct-light textcenter">
      <h3 class="is_v-center">Curtain rigth</h3>
    </div>
  </div>
  <div class="c-curtain-ct c-col-xs-6 c-col-lg-3 bg-grey9 p-xl">
    <div class="c-curtain c-curtain--b bg-3 ct-light textcenter">
      <h3 class="is_v-center">Curtain bottom</h3>
    </div>
  </div>
  <div class="c-curtain-ct c-col-xs-6 c-col-lg-3 bg-grey10 p-xl">
    <div class="c-curtain c-curtain--l bg-4 ct-light textcenter">
      <h3 class="is_v-center">Curtain left</h3>
    </div>
  </div>
</div>
````