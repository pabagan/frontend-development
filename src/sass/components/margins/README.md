# Margins

## Basic margin

* Margins: `c-m-[xs,sm,md,lg]`.
* Vertical margins: `c-m-[xs,sm,md,lg]-vert`.
* Lateral margin: `c-m-[xs,sm,md,lg]-lat`.
* Reset margin: `c-m-0`.
* Reset margin by side: `c-m-[top,right,bottom,left]-0`.

```html
<img class="c-img c-m-0" src="http://placehold.it/960x960" />
```

## Children margin
add margins between parent's children with `c-m-child-[xs,sm,md,lg]-[left,right]`.

```html
<div class="c-row">
  <ul class="c-l-float c-m-child-sm-right">
    <li><img class="c-h-sm" src="assets/img/logo-acc.png" /></li>
    <li><img class="c-h-sm" src="assets/img/logo-cpcc.png" /></li>
    <li><img class="c-h-sm" src="assets/img/logo-orsc.png" /></li>   
  </ul>
</div>
```        