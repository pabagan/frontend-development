# Debounce

## Usage

```js
// 
// scroll example
// 
var scrollFx = function() {
    console.log('scrollDebounced');
};

$(window).scroll(function() {
    scroll()

    debounce(scrollFx, 1500);
});

// 
// screen resize example
// 
var screenResizeNotify = debounce(function() {
// Window resize notifies
    console.log('screenResizeNotify!!');
    screenResize.notify();
    // All the taxing stuff you do
}, 500);

window.addEventListener('resize', screenResizeNotify);
```

