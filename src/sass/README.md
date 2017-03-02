# Sass

The [sass](http://sass-lang.com/) files are ordered using [SMACSS](https://smacss.com/) principles. Here is a self [summary for SMACSS](https://github.com/pabagan/Knowledgebase/tree/master/SMACSS).

Here is the scaffolding of sass (sorry for that monster but maybe help).
```bash
sass/
├── base
│   ├── _base.scss
│   ├── colors
│   │   ├── _colors.scss
│   │   └── README.md
│   ├── fonts
│   │   ├── _font-face.scss
│   │   ├── _fonts-percentage.scss
│   │   ├── _fonts-rem.scss
│   │   └── README.md
│   ├── resets
│   │   ├── _normalize-extended.scss
│   │   ├── _normalize.scss
│   │   └── README.md
│   └── vertical-rythm
│       ├── README.md
│       └── _vertical-rythm.scss
├── components
│   ├── alerts
│   │   ├── _alerts.scss
│   │   └── README.md
│   ├── arrowed-lay
│   │   ├── _inner-arrow.scss
│   │   ├── _outer-arrow.scss
│   │   └── README.md
│   ├── backgrounds
│   │   └── _backgrounds.scss
│   ├── bars
│   │   ├── _app-bars.scss
│   │   ├── _bars.scss
│   │   └── README.md
│   ├── borders
│   │   ├── _borders.scss
│   │   └── README.md
│   ├── boxes
│   │   └── _boxes.scss
│   ├── buttons
│   │   ├── _button-bg.scss
│   │   ├── _button-icon.scss
│   │   ├── _button-ln.scss
│   │   └── README.md
│   ├── _components.scss
│   ├── cta
│   │   ├── _cta.scss
│   │   └── README.md
│   ├── curtains
│   │   ├── _curtains.scss
│   │   └── README.md
│   ├── embeds
│   │   ├── _embeds.scss
│   │   └── README.md
│   ├── forms
│   │   ├── forms
│   │   │   ├── _forms-defaults.scss
│   │   │   ├── _forms-fld-bg.scss
│   │   │   └── _forms-fld-lined.scss
│   │   ├── _forms.scss
│   │   └── README.md
│   ├── grid
│   │   ├── _grid-height.scss
│   │   ├── _grid-width.scss
│   │   └── README.md
│   ├── icons
│   │   ├── _bonicons-md.scss
│   │   ├── _icons.scss
│   │   ├── _linearicons.scss
│   │   └── README.md
│   ├── images
│   │   ├── _images.scss
│   │   └── README.md
│   ├── lists
│   │   ├── _list-adminUI.scss
│   │   ├── _lists-icons.scss
│   │   ├── _lists.scss
│   │   └── README.md
│   ├── margins
│   │   ├── _margin-children.scss
│   │   ├── _margins.scss
│   │   └── README.md
│   ├── media
│   │   ├── _media.scss
│   │   └── README.md
│   ├── mixed
│   │   ├── _mixed.scss
│   │   └── README.md
│   ├── modals
│   │   ├── _modals.scss
│   │   └── README.md
│   ├── navigation
│   │   ├── _navigation.scss
│   │   ├── README.md
│   │   ├── _site-navigation.scss
│   │   ├── _site-navitation.scss
│   │   └── _superfish.scss
│   ├── paddings
│   │   ├── _paddings-percentage.scss
│   │   ├── _paddings-rem.scss
│   │   └── README.md
│   ├── parallax
│   │   ├── _parallax.scss
│   │   └── README.md
│   ├── screen-readers
│   │   ├── README.md
│   │   └── _screen-readers.scss
│   ├── separators
│   │   ├── _blank-space.scss
│   │   └── README.md
│   ├── shadows
│   │   ├── README.md
│   │   └── _shadows.scss
│   ├── sizes
│   │   ├── _heights-rem.scss
│   │   ├── README.md
│   │   └── _widths-rem.scss
│   ├── sliders
│   │   ├── _owl-carousel2.scss
│   │   ├── _owl-theme2.scss
│   │   ├── README.md
│   │   └── _royal-slider.scss
│   ├── squares
│   │   ├── README.md
│   │   └── _squares.scss
│   └── tabs
│       ├── README.md
│       └── _tabs.scss
├── _config.scss
├── extras-shine-coaching
│   ├── _config.scss
│   └── _styles.scss
├── inc
│   ├── functions
│   │   ├── _functions.scss
│   │   └── self
│   │       ├── _colors.scss
│   │       ├── _decimal.scss
│   │       ├── _fonts.scss
│   │       └── _strip-units.scss
│   ├── mixins
│   │   ├── bootstrap
│   │   │   ├── _alerts.scss
│   │   │   ├── _background-variant.scss
│   │   │   ├── _border-radius.scss
│   │   │   ├── _buttons.scss
│   │   │   ├── _center-block.scss
│   │   │   ├── _clearfix.scss
│   │   │   ├── _forms.scss
│   │   │   ├── _gradients.scss
│   │   │   ├── _grid-framework.scss
│   │   │   ├── _grid.scss
│   │   │   ├── _hide-text.scss
│   │   │   ├── _image.scss
│   │   │   ├── _labels.scss
│   │   │   ├── _list-group.scss
│   │   │   ├── _nav-divider.scss
│   │   │   ├── _nav-vertical-align.scss
│   │   │   ├── _opacity.scss
│   │   │   ├── _pagination.scss
│   │   │   ├── _panels.scss
│   │   │   ├── _progress-bar.scss
│   │   │   ├── _reset-filter.scss
│   │   │   ├── _reset-text.scss
│   │   │   ├── _resize.scss
│   │   │   ├── _responsive-visibility.scss
│   │   │   ├── _size.scss
│   │   │   ├── _tab-focus.scss
│   │   │   ├── _table-row.scss
│   │   │   ├── _text-emphasis.scss
│   │   │   ├── _text-overflow.scss
│   │   │   └── _vendor-prefixes.scss
│   │   ├── _mixins.scss
│   │   └── self
│   │       ├── _alignments.scss
│   │       ├── _alpha-lay.scss
│   │       ├── _animations.scss
│   │       ├── _backgrounds.scss
│   │       ├── _border-center.scss
│   │       ├── _border-radious.scss
│   │       ├── _borders.scss
│   │       ├── _box-emboss.scss
│   │       ├── _box-models.scss
│   │       ├── _clearfix.scss
│   │       ├── _colors.scss
│   │       ├── _font-face.scss
│   │       ├── _fonts.scss
│   │       ├── _gradients.scss
│   │       ├── _grid-factory.scss
│   │       ├── _hide-text.scss
│   │       ├── _hyphens.scss
│   │       ├── _icons.scss
│   │       ├── _lists.scss
│   │       ├── _media-query.scss
│   │       ├── _navigation.scss
│   │       ├── _shadow.scss
│   │       ├── _shadows.scss
│   │       ├── _size.scss
│   │       ├── _transform.scss
│   │       ├── _transition.scss
│   │       ├── _translate.scss
│   │       └── _wp-gallery.scss
│   └── README.md
├── layout
│   ├── layouts
│   │   ├── _01.scss
│   │   ├── _02.scss
│   │   ├── _flex-3-cols.scss
│   │   └── _flex-holy-grial-3-cols.scss
│   ├── _layout.scss
│   └── README.md
├── plugins
│   ├── animate-appear
│   │   ├── _animate-appear.scss
│   │   └── README.md
│   └── _plugins.scss
├── README.md
├── states
│   ├── alignments
│   │   ├── _block-align.scss
│   │   ├── _child-align.scss
│   │   ├── README.md
│   │   └── _text-align.scss
│   ├── display
│   │   ├── _display.scss
│   │   └── README.md
│   ├── positions
│   │   ├── _positions.scss
│   │   └── README.md
│   ├── scroll
│   │   ├── README.md
│   │   └── _scroll.scss
│   ├── _states.scss
│   ├── text
│   │   └── _text-states.scss
│   ├── transitions
│   │   ├── README.md
│   │   └── _transitions.scss
│   ├── visibility
│   │   ├── README.md
│   │   └── _visibility.scss
│   └── z-index
│       ├── README.md
│       └── _z-index.scss
├── style.scss
├── _tests.scss
├── vendor
└── wordpress
    ├── components
    │   ├── alignments
    │   │   ├── _alignments.scss
    │   │   └── README.md
    │   ├── comments
    │   │   ├── _comments.scss
    │   │   └── README.md
    │   ├── _components.scss
    │   ├── entry
    │   │   ├── components
    │   │   │   ├── _entry-content.scss
    │   │   │   ├── _entry-heading-metas.scss
    │   │   │   ├── _entry-pagination.scss
    │   │   │   ├── _entry-share.scss
    │   │   │   ├── _entry-taxonomies.scss
    │   │   │   └── _wp-caption.scss
    │   │   ├── _entry.scss
    │   │   └── README.md
    │   ├── media-player
    │   │   ├── _media-player.scss
    │   │   └── README.md
    │   ├── page-archive
    │   │   ├── _page-archive.scss
    │   │   └── README.md
    │   ├── page-author
    │   │   ├── _page-author.scss
    │   │   └── README.md
    │   ├── paginations
    │   │   ├── _pagination-archive.scss
    │   │   ├── _pagination-comments.scss
    │   │   ├── _pagination-single.scss
    │   │   ├── _post-navigation.scss
    │   │   └── README.md
    │   ├── post-loop
    │   │   ├── _post-loop1.scss
    │   │   └── README.md
    │   ├── post-metas
    │   │   ├── _post-metas.scss
    │   │   └── README.md
    │   ├── post-types
    │   │   ├── _post-types.scss
    │   │   └── README.md
    │   ├── widgets
    │   │   ├── README.md
    │   │   └── _widgets.scss
    │   ├── wp-gallery
    │   │   ├── README.md
    │   │   └── _wp-gallery.scss
    │   └── wp-images
    │       ├── README.md
    │       └── _wp-images.scss
    ├── _config.scss
    ├── layout
    │   ├── _layout.scss
    │   ├── README.md
    │   └── sidebar
    │       └── _sidebar.scss
    ├── plugins
    │   └── _plugins.scss
    ├── README.md
    ├── states
    │   └── _states.scss
    └── _wordpress.scss
```
