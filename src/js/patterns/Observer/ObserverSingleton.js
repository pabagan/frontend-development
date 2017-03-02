/**
 * Observer pattern subject with singleton.
 * 
 * @author @pabagan
 * @credit https://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript
 */
'use strict';
var observerSubject = (function () {
    var instance,
        observers;

    function init(){
        observers = new ObserverList();
        
        return {
            addObserver: function( newObserver ){
                //console.log('screenSizeChange.addObserver(newObserver)');
                observers.add(newObserver);
            },
            removeObserver: function( newObserver ){
                //console.log('screenSizeChange.removeObserver(newObserver)');
                observers.removeAt(observers.indexOf(newObserver, 0));
            },
            notify: function( context ){
                //console.log('screenSizeChange.notify(context)');
                var observerCount = observers.count();
                for(var i=0; i < observerCount; i++){
                    observers.get(i).update(context);
                }
            },
            
        };
    }

    return {
        // Get the Singleton instance if one exists
        // or create one if it doesn't
        getInstance: function () {
            if ( !instance ) {
                instance = init();
            }

            return instance;
        }
    };
})();