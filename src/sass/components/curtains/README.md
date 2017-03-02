# Curtain lays
Lays that appear inside other lays on hover or click event. Need a wrapper with `c-curtain-ct` and a content with `c-curtain-[top|right|bottom|left]`.

To deal with javascript a controller should toggleClass `is_on` at `c-curtain-[top|right|bottom|left]` lay.

## html
```html
<div class="c-curtain-ct c-col-xs-6 c-col-lg-3 bg-grey8">
    <div class="c-curtain-right bg-4 ct-light textcenter">
      <h3 class="is_v-center">Curtain rigth</h3>
    </div>
</div>
```
