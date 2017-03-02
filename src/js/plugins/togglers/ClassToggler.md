# Class Toggler
Toggle classes `is_on`/`is_off` 

* Toggle controller has `data-toggle-classes`  `aria-expanded="false"` `aria-controls="elementId"`.
* Toggle content has `id="elementId"` and `class="is_off"`.

```html
<!-- toggle controller -->
<button id="nav-toggle" data-toggle-classes type="button" aria-expanded="false" aria-controls="site-nav">
  Toggler Ctrl
</button>
<!-- toggle content -->
<nav id="site-nav" class="is_off">
  Toggle content
</nav>
```