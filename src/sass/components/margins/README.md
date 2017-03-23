# Margins

## Basic margin

* Margins: `m[t,r,b,l]-[xs,sm,md,lg]`.
* Lateral/Vertical margins: `m[v,l]-[xs,sm,md,lg]`.
* Reset margins: `m-0`.
* Reset margin by side: `m-[t,r,b,l]-0`.

```html
<img class="c-img cm-0" src="http://placehold.it/960x960" />
```


```html
<div class="c-row">
  <ul class="c-l-block">
    <li><img class="mb-md" src="assets/img/logo-acc.png" /></li>
    <li><img class="mb-md" src="assets/img/logo-acc.png" /></li>
    <li><img class="mb-md" src="assets/img/logo-acc.png" /></li>
    <li><img class="mb-md" src="assets/img/logo-acc.png" /></li>
  </ul>
</div>
```

## Children margin
add margins between parent's children with `c-m-child-[xs,sm,md,lg]-[left,right]`.

```html
<div class="c-row">
  <ul class="c-l-float mcr-sm">
    <li><img class="c-h-sm" src="assets/img/logo-acc.png" /></li>
    <li><img class="c-h-sm" src="assets/img/logo-cpcc.png" /></li>
    <li><img class="c-h-sm" src="assets/img/logo-orsc.png" /></li>   
  </ul>
</div>
```