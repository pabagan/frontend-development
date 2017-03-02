# Lists

* `c-l-reset`: reset bullet and spaces.
* `c-l-block`: reset bullet and spaces.
* `c-l-inline`: list with inlined items.
* `c-l-float`: list with floated items.

## Admin UI
Style CRUD like list with click buttons inlined to de title.

```html
<div class="c-row">
  <div class="c-manager-header h3 is_upper">
    Elemento 1 
  </div>
  <ul class="c-manager-list">
    <li class="c-manager-wrap">
      <a class="c-manager-item" href="#">
        Elemento 1 
      </a>
      <div class="c-manager-controls">                
        <a href="#"><span class="c-icon i-pencil" aria-hidden="true"></span></a>
        <a href="#"><span class="c-icon i-eye" aria-hidden="true"></span></a>
      </div>
    </li> 

    <li class="c-manager-wrap">
      <a class="c-manager-item" href="#">
        ...
      </a>
      <div class="c-manager-controls">                
        <a href="#"><span class="c-icon i-pencil" aria-hidden="true"></span></a>
        <a href="#"><span class="c-icon i-eye" aria-hidden="true"></span></a>
      </div>
    </li> 
  </ul>
</div>
```
