# Media
Build images + content floated with `media__thumb` and `media__ct`. Align content adding extra class with modifier `media__ct--[bottom,mid, top]`.

```html
<li class="media">
  <div class="media__thumb">
    ...
  </div>
  <div class="media__ct">
    ...
  </div>      
</li>

```

```html
<ul class="media c-l-block">
<li class="media">
  <div class="media__thumb">
    <img class="media__thumb__img c-w-lg" src="assets/img/640x640.jpg">
  </div>
  <div class="media__ct">
    <span>Media default align to top just `media__ct`</span> or overwrite with ` media__ct--top`
  </div>      
</li>

<li class="media">
  <div class="media__thumb">
    <img class="c-w-lg" src="assets/img/640x640.jpg">
  </div>
  <div class="media__ct media__ct--mid">
    <span>Content at middle with `media__ct media__ct--mid`</span>
  </div>      
</li>

<li class="media">
  <div class="media__thumb">
    <a class="media__thumb__link" href="#">
      <span class="c-icon-xl c-sq-lg bg-grey8 i-twitter" aria-hidden="true"></span>
    </a>
  </div>
  <div class="media__ct media__ct--bottom">
    <span>Content at bottom with `media__ct media__ct--bottom` with clickable media.</span>
  </div>      
</li>
</ul>
```