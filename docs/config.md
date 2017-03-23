# Style Configuration
```sass
// 
// Dinamic CSS positions
// --------------------------------------
$positions: top, right, bottom, left;

// 
// Define base rem sizes
// --------------------------------------
$size-rem-1       : 1rem;
$size-rem-xs      : 2rem;
$size-rem-sm      : 2.8rem;
$size-rem-md      : 4.2rem;
$size-rem-lg      : 7rem;
$size-rem-xl      : 13.5rem;

// Mobile paddings
$space-mobile     : 18px;
$space-mobile-lg  : 40px;

// Base REM sizes Fibonacci's progression
// --------------------------------------
//$size-rem-xs    : 2rem;
//$size-rem-sm    : 3rem;
//$size-rem-md    : 5rem;
//$size-rem-lg    : 8rem;
//$size-rem-xl    : 13rem;

// Sizes map
$rem-sizes: (
    'xs'    : $size-rem-xs,
    'sm'    : $size-rem-sm,
    'md'    : $size-rem-md,
    'lg'    : $size-rem-lg,
    'xl'    : $size-rem-xl,
);

// 
// Typography
// --------------------------------------
$main-font          : "Source Sans Pro", Helvetica, Arial, sans-serif !important;
$second-font        : "Sentinel A", "Sentinel B", Times, serif !important;
$monospace-font     : Menlo, Monaco, Consolas, "Courier New", monospace !default;

// 
// 1. Diseño da tamaño de fuentes en píxeles 
//
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

// 
// Responsive breakpoints to change 
// base html font-size.
// 
$font-changeat_1 : 'sm';
$font-changeat_2 : 'xl';

// Conver size in % and keep in variables. 
// It computes size consider $fs-px in relation
// with base font size at desktop size
$fs-base : $fs-desktop;

$jumbo-fs   : font_rem($jumbo-px, $fs-base);
$h1-fs      : font_rem($h1-px, $fs-base);
$h2-fs      : font_rem($h2-px, $fs-base);
$h3-fs      : font_rem($h3-px, $fs-base);
$h4-fs      : font_rem($h4-px, $fs-base);
$h5-fs      : font_rem($h5-px, $fs-base);
$h6-fs      : font_rem($h6-px, $fs-base);
$p-xs       : font_rem($p-xs-px, $fs-base);
$p-sm       : font_rem($p-sm-px, $fs-base);
$p          : font_rem($p-px, $fs-base);
$p-lg       : font_rem($p-lg-px, $fs-base);

//
// Line heights
//
$lh-xs  : 1.059;
$lh-sm  : 1.166;
$lh-md  : 1.2;
$lh-lg  : 1.4;

// 
// Weights
// 
$fw400  : 400;
$fw700  : 700;

// Define qué elementos selector de elemento
$html_elements: ( "h1", "h2", "h3", "h4", "h5", "h6", "p" );
$theme-sizes: (
    "jumbo"   : ( font-size: $jumbo-fs, line-height: $lh-sm, font-weight: $fw700 ),
    "h1"        : ( font-size: $h1-fs, line-height: $lh-sm, font-weight: $fw700 ),
    "h2"        : ( font-size: $h2-fs, line-height: $lh-md, font-weight: $fw700 ),
    "h3"        : ( font-size: $h3-fs, line-height: $lh-md, font-weight: $fw700 ),
    "h4"        : ( font-size: $h4-fs, line-height: $lh-lg, font-weight: $fw700 ),
    "h5"        : ( font-size: $h5-fs, line-height: $lh-lg, font-weight: $fw700 ),
    "h6"        : ( font-size: $h6-fs, line-height: $lh-lg, font-weight: $fw700 ),
    "p-xs"      : ( font-size: $p-xs, line-height: $lh-lg, font-weight: $fw400 ),
    "p-sm"      : ( font-size: $p-sm, line-height: $lh-lg, font-weight: $fw400 ),
    "p-md"      : ( font-size: $p, line-height: $lh-lg, font-weight: $fw400 ),
    "p-lg"      : ( font-size: $p-lg, line-height: $lh-lg, font-weight: $fw400 ),
);

// 
// Vertical Spacing
// --------------------------------------
$space-xs   : 0.333em;
$space-sm   : 0.666em;
$space-md   : 0.833em;
$space-lg   : 1.249em;
$space-xl   : 1.999em;
//$space-xl   : 2.666rem;
//$space-xxl  : 3.333rem;

// saltos map
$spaces:(
    'xs'    : $space-xs,
    'sm'    : $space-sm,
    'md'    : $space-md,
    'lg'    : $space-lg,
    'xl'    : $space-xl,
);

// 
// Inner Spacing/paddings
// --------------------------------------
$padding-xs     : 1.04%;
$padding-sm     : 2.08%;
$padding-md     : 4.16%;
$padding-lg     : 8.32%;
$padding-xl     : 16.64%;

$paddings:(
    "xs": $padding-xs,
    "sm": $padding-sm,
    "md": $padding-md,
    "lg": $padding-lg,
    "xl": $padding-xl,
);

// 
// z-index
// --------------------------------------
$z1:  999 !default;
$z2:  1000 !default;
$z3:  1000 !default;
$z4:  1030 !default;
$z5:  1040 !default;
$z6:  1050 !default;
$z7:  1060 !default;
$z8:  1070 !default;

// 
// Screen Breakpoints
// --------------------------------------
$screen-xs:                  480px !default;
$screen-xs-min:              $screen-xs !default;
$screen-phone:               $screen-xs-min !default;
$screen-sm:                  639px !default;
$screen-sm-min:              $screen-sm !default;
$screen-tablet:              $screen-sm-min !default;
$screen-md:                  940px !default; // fits with half sized browser in big screents
//$screen-md:                  992px !default;
$screen-md-min:              $screen-md !default;
$screen-desktop:             $screen-md-min !default;
$screen-lg:                  1200px !default;
$screen-lg-min:              $screen-lg !default;
$screen-lg-desktop:          $screen-lg-min !default;// Large screen / wide desktop
$screen-xl:                  1599px !default;
$screen-xl-min:              $screen-xl !default;
$screen-xl-desktop:          $screen-xl-min !default;
$screen-xxl:                 1900px !default;
$screen-xxl-min:             $screen-xxl !default;
// max
$screen-xs-max:              ($screen-sm-min - 1) !default;
$screen-sm-max:              ($screen-md-min - 1) !default;
$screen-md-max:              ($screen-lg-min - 1) !default;
$screen-lg-max:              ($screen-xl-min - 1) !default;
$screen-xl-max:              ($screen-xxl-min - 1) !default;

// Screen sizes map
$screen-sizes: (
  'xs': $screen-xs-min,
  'sm': $screen-sm-min,
  'md': $screen-md-min,
  'lg': $screen-lg-min,
  'xl': $screen-xl-min,
  'xxl': $screen-xxl-min,
);

// 
// Colors
// --------------------------------------
$color1   : #e4032e;  // rojo shine
$color2   : #831f82;  // morado
$color3   : #e6007e; // magenta
$color4   : #169fdb;  // cyan


$colorf   : #ffffff;
$color0   : #999999;
// 
// greys
// 
$color0    : #121212;
$grey1    : #3c3b3a;
$grey2    : #585756;
$grey3    : #706f6f;
$grey4    : #868686;
$grey5    : #9c9c9b;
$grey6    : #b1b1b0;
$grey7    : #c7c5c5;
$grey8    : #e3e3e3;
$grey9    : #e9e9e9;
$grey10   : #eeefef;
$grey11   : #f4f3f4;
$grey12   : #f9f9f9;

// Colors Map
$colors: (
  "f":      $colorf,
  "body":   $colorf,
  "font":   $colorf,
  "1":    $color1,
  "2":    $color2,
  "3":    $color3,
  "4":    $color4,
  "grey0":    $color0,
  "grey1":    $grey1,
  "grey2":    $grey2,
  "grey3":    $grey3,
  "grey4":    $grey4,
  "grey5":    $grey5,
  "grey6":    $grey6,
  "grey7":    $grey7,
  "grey8":    $grey8,
  "grey9":    $grey9,
  "grey10":   $grey10,
  "grey11":   $grey11,
  "grey12":   $grey12,
);

// Basic theme colors
$bodyBgColor: $grey12;
$bodyFontColor: $grey3;
$linksColor: $color1;


// 
// Icons
// --------------------------------------
$icons-class: 'c-icon';
$iconfix-class   : "c-icon-f"; // no responsive

$icons: (
    'xs': (size: $size-rem-xs, font-size: $h5-fs, padding: .6em),
    'sm': (size: $size-rem-sm, font-size: $h4-fs, padding: .6em),
    'md': (size: $size-rem-md, font-size: $h3-fs, padding: .6em),
    'lg': (size: $size-rem-lg, font-size: $h1-fs, padding: .6em),
    'xl': (size: $size-rem-xl, font-size: $jumbo-fs, padding: .3em),
);

// Font used: Bonicons
$icon-font-id      : 'e5eca4';
$icon-font         : 'bonicons';
$path-to-icon-font-root : '../fonts/' + $icon-font;

// Linearicons
//$icon-font          : 'Linearicons-Free';
//$path-to-icon-font-root  : '../fonts/' + $icon-font;
//$icon-font-id        : 'h6wv1i';

```