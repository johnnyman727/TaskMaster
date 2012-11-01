function initialize() {
var mapOptions = {
  center: new google.maps.LatLng(42.292612, -71.263247),
  zoom: 15,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(document.getElementById("map_canvas"),
    mapOptions);
}