# Paddings

## Using %

* Padding: `p-[xs,sm,md,lg]`.
* Per side padding: `p[t,r,b,l]-[xs,sm,md,lg]`.
* Vertical padding: `pv-[xs,sm,md,lg]`.
* Lateral padding: `pl-[xs,sm,md,lg]`.

```html
<div class="c-p-md">
  Hi with md padding
</div>
```

## Using rem

* Vertical padding: `c-p-rem-[xs,sm,md,lg]`.
* Lateral padding: `c-p-rem-[xs,sm,md,lg]-lat`.
* Single side padding: `c-p-rem-[xs,sm,md,lg]-[top,right,bottom,left]`.

```html
<div class="c-p-rem-md">
  Hi with md padding
</div>
```

## Reset paddings

* Reset padding: `c-p-0`.
* Reset padding by side: `c-p-[vert,lat]-0`.