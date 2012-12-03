var map = null;
var overlay = null;

function updateMapHTML() {
 	var myLatLng = new google.maps.LatLng(42.2935, -71.2639);
  	var mapOptions = {
    zoom: 11,
    center: myLatLng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

	var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

	var swBound = new google.maps.LatLng(42.381819, -71.187132);
	var neBound = new google.maps.LatLng(42.400471, -71.005608);
	var bounds = new google.maps.LatLngBounds(swBound, neBound);

	overlay = new TaskOverlay(bounds, me.taskList.tasks[0], map);
	// overlay.toggleDOM();
}

// $('#home-map').live("pageshow", function() {
// 		$('#map_canvas').gmap('refresh');
// });
$('#home-map').live("pageinit", function() {
		// $('#map_canvas').gmap({'center': '42.2935, -71.2639'});
		// $('#map_canvas').gmap('option', 'zoom', 15);
		// $('#map_canvas').gmap('addMarker', {'id': 'm1', 'position': '42.2935, -71.2639', 'bounds':false});
		updateMapHTML();
});
