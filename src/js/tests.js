var map;

function initMap() {

  var mapTitle  = 'Farmacia Lasarte';
  var mapLay    = 'map';

  var latLong   =  {lat: 37.87944, lng: -4.788028};
  var mapOptions = {
    zoom: 14,
    center: latLong,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    //disableDefaultUI: true,
    mapTypeControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    overviewMapControl: false,
    streetViewControl: false,
    navigationControl: false,
    //draggable: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    zoomControl: true,
    /*
    */
  };

  map = new google.maps.Map(document.getElementById(mapLay), mapOptions);

  /*
   * Add Custom Market.
   */
  var marker = new google.maps.Marker({
      position: latLong,
      map: map,
      title: mapTitle,
      icon: 'http://farmacialasarte.com/assets/img/location.png'
  });
}

/*

google.maps.event.addDomListener(window, 'load', initialize);

// Posicionar respecto del centro al cambiar el tamaño de la pantalla.
google.maps.event.addDomListener(window, "resize", function() {
  var center = map.getCenter();
  google.maps.event.trigger(map, "resize");
  map.setCenter(center); 
});
 */