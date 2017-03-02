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
 * Create a Observer list 
 * interface.
 */
function List(){
    //console.log('List()');
    this.list = [];
}
 
List.prototype = {
    add: function( obj ){
        return this.list.push( obj );
    },
     
    count: function(){
        return this.list.length;
    },
     
    get: function( index ){
        if( index > -1 && index < this.list.length ){
            return this.list[ index ];
        }
    },
     
    indexOf: function( obj, startIndex ){
        var i = startIndex;
     
        while( i < this.list.length ){
            if( this.list[i] === obj ){
                return i;
            }
            i++;
        }
     
        return -1;
    },

     removeAt: function( index ){
        this.list.splice( index, 1 );
    },
};