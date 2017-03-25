# Lists

* `c-l-reset`: reset bullet and spaces.
* `c-l-block`: reset bullet and spaces.
* `c-l-inline`: list with inlined items.
* `c-l-float`: list with floated items.

## Admin UI
Style CRUD like list with click buttons inlined to de title.

```html
<div class="c-manager">
  <div class="c-manager__header h3 is_upper"> Elemento 1 </div>
  <ul class="c-manager__list">
    <li class="c-manager-item">
      <a class="c-manager-item__name" href="#"> Elemento 1 </a>
      <div class="c-manager-item__controls">
        <a class="c-manager-item__bt" href="#">
          <span class="c-icon i-pencil" aria-hidden="true"></span>
        </a>
        <a class="c-manager-item__bt" href="#">
          <span class="c-icon i-eye" aria-hidden="true"></span>
        </a>
      </div>
    </li>
  </ul>
</div>
```

## Admin UI Flex
```html
<div class="c-manager">
  <div class="c-manager__header h3 is_upper">   CRUD UI LIST HEADER
  </div>
  <ul class="c-manager__list">
    <li class="c-manager-item">
      <a class="c-manager-item__name" href="#"> Elemento 1  Elemento 1  Elemento 1  Elemento 1  Elemento 1  Elemento 1  Elemento 1 Elemento 1 Elemento 1 Elemento 1 Elemento 1 Elemento 1 Elemento 1 
      </a>
      <a class="c-manager-item__bt ml-auto" href="#">
        <span class="c-icon i-pencil" aria-hidden="true"></span>
      </a>
      <a class="c-manager-item__bt" href="#">
        <span class="c-icon i-eye" aria-hidden="true"></span>
      </a>
    </li>
    <li class="c-manager-item">
      <a class="c-manager-item__bt ml-auto" href="#">
        <span class="c-icon i-pencil" aria-hidden="true"></span>
      </a>
      <a class="c-manager-item__bt" href="#">
        <span class="c-icon i-eye" aria-hidden="true"></span>
      </a>
      <a class="c-manager-item__name" href="#"> Elemento 1
      </a>
    </li>
  </ul>
</div>
