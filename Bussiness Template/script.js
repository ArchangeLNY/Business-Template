// Code goes here

function initialize() {
  var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
  var mapOptions = {
    zoom: 4,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });
  
  var markers = {};
  var i=0;
  
  google.maps.event.addListener(map, 'click', function(event) {
    var lat = event.latLng.lat()-20, lng = event.latLng.lng()-20;

    var existingMarkers = Object.keys(markers);
    for(var index in existingMarkers) {
      var key = existingMarkers[index];
      markers[key].setMap(null);
      delete markers[key];
    }

    for (max = i+400; i<max; i++) {
      var latlng = new google.maps.LatLng(lat+=0.1,lng+=0.1);
      markers[i] = new google.maps.Marker({position: latlng, map: map});
    }
    
    console.log("Currently we have "+Object.keys(markers).length + " markers");
  });

}

google.maps.event.addDomListener(window, 'load', initialize);
