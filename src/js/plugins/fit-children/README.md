# Fit Childs
Fit children's height same as the highest child.

## Usage
Add attribute `data-gx-fit-childs` to a html elements to make its height equal.

```html 
<div class="row bg-2" data-gx-fit-childs>
    <div class="col-xs-12 col-sm-6 c-p-0">
        <img class="c-img c-m-0" src="http://placehold.it/960x960" />
    </div>
    <div class="c-p-lg col-sm-6 bg-1" style="height:770px"><!-- will be overwritten -->
        <div class="is_v-center">
            <h3>Fit Childs</h3>
            <p>Duis ultricies vel quam quis blandit. Aliquam varius purus eu velit posuere.</p>
        </div>
    </div>
</div>
```

