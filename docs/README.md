# Design Sheet

- [Font sizes](#font-sizes)
- [Vertical spacing](#vertical-spacing)
- [Lateral spacing](#lateral-spacing)
- [Fit sizes](#fit-sizes)

## Font sizes
Using rem units but `_config.scss` receive pixels computed with base font size `$fs-desktop` to `rem`.

```sass
// this are unit/pixels for desktop
$jumbo-px   : 66.666;
$h1-px      : 53.333;
$h2-px      : 40;
$h3-px      : 33.333;
$h4-px      : 25.714;
$h5-px      : 20;
$h6-px      : 17.42;
$p-xs-px    : 14.285;
$p-sm-px    : 17.42;
$p-px       : 20;
$p-lg-px    : 24;

// 
// base root sizes
// 
$fs-mobile    : 16.666;
$fs-tablet    : 18.571;
$fs-desktop   : 20;
```

## Vertical spacing

```sass
$space-xs   : 0.333em;
$space-sm   : 0.666em;
$space-md   : 0.833em;
$space-lg   : 1.249em;
$space-xl   : 1.999em;
```

* **h1-h4** bottom `space-sm`.
* **h5-h6** bottom `space-md`.
* **HTML block elements** bottom `space-md`.

Single text pages like post, text-pages has **epecial behaviour**:
* **h1-h6** top `space-xs`.
* **HTML block elements** bottom and top `space-md`.


## Lateral spacing
Is done via padding using: 

```sass
$padding-xs     : 1.04%;
$padding-sm     : 2.08%;
$padding-md     : 4.16%;
$padding-lg     : 8.32%;
$padding-xl     : 16.64%;
```

## Fit sizes
Are available classes to define element height, make squares, etc. Done with rem sizes:

```sass
$size-rem-1       : 1rem;
$size-rem-xs      : 2rem;
$size-rem-sm      : 2.8rem;
$size-rem-md      : 4.2rem;
$size-rem-lg      : 7rem;
$size-rem-xl      : 13.5rem;
```
