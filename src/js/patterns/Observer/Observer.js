/**
 * Observer pattern subject.
 * 
 * Here is used to deal specially with
 * screen resize and screen sizes change.
 * 
 * Sizes used are (xs,sm,md,lg,xl).
 * 
 * @author @pabagan
 * @credit https://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript
 */

'use strict';

/**
 * Observer subject to create and 
 * manage observables.
 */
function ObserverSubject(){
    this.observers = new List();
}

ObserverSubject.prototype = {

    addObserver: function( newObserver ){
        //console.log('ObserverSubject.addObserver(newObserver)');
        this.observers.add(newObserver);
    },
    removeObserver: function( newObserver ){
        //console.log('ObserverSubject.removeObserver(newObserver)');
        this.observers.removeAt(this.observers.indexOf(newObserver, 0));
    },
    notify: function( context ){
        //console.log('ObserverSubject.notify(context)');
        var observerCount = this.observers.count();
        for(var i=0; i < observerCount; i++){
            this.observers.get(i).update(context);
        }
    },
    
};

var observerSubject = (function () {
    var instance,
        observers;

    function init(){
        observers = new List();
        
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