'use strict';
/**!
 * Debounze from Underscores.js but
 * seen at David walsh site
 * 
 * @author @pabagan
 * @see https://davidwalsh.name/javascript-debounce-function 
 * @return void 
 */
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}