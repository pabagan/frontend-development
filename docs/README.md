# Design Sheet

- [Font sizes](#font-sizes)
- [Vertical spacing](#vertical-spacing)
- [Lateral spacing](#lateral-spacing)
- [Fit sizes](#fit-sizes)
- [Screen sizes](#screen-sizes)
- [Screen sizes](#screen-sizes)
- [Colors](#colors)

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

## Screen sizes
```sass
$screen-xs:                  480px !default;
$screen-sm:                  639px !default;
$screen-md:                  940px !default;
$screen-xl:                  1599px !default;
$screen-xxl:                 1900px !default;
```

## Colors
```sass
$color1     : #FECB00;  // amarillo carofile
$color2     : #831f82;  // morado
$color3     : #e6007e;  // magenta
$color4     : #169fdb;  // cyan


$colorf     : #ffffff;
$color0     : #1e1e1e;
// 
// greys
// 
$grey1      : #3c3b3a;
$grey2      : #585756;
$grey3      : #706f6f;
$grey4      : #868686;
$grey5      : #9c9c9b;
$grey6      : #b1b1b0;
$grey7      : #c7c5c5;
$grey8      : #e3e3e3;
$grey9      : #e9e9e9;
$grey10     : #eeefef;
$grey11     : #f4f3f4;
$grey12     : #f9f9f9;
```
