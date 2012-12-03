

$('#home-map').live("pageshow", function() {
        $('#map_canvas').gmap('refresh');
        updateContentHTML();
});
$('#home-map').live("pageinit", function() {
        map = $('#map_canvas').gmap({'center': center_lat.toString() + ", " + center_long.toString()});
        $('#map_canvas').gmap('option', 'zoom', 11);
        $('#map_canvas').gmap('option', 'minZoom', 11);
        $('#map_canvas').gmap('option', 'maxZoom', 11);
        $('#map_canvas').gmap('option', 'zoomControl', false);
        $('#map_canvas').gmap('option', 'disableDefaultUI', true);
});

random_lat = function() {
		var rando = ((Math.random() *2.0) - 1) * .05;
		return (center_lat + random_direction());
}
random_long = function() {
		return (center_long + random_direction());
}

function random_direction() {
	return ((Math.random() *2.0) - 1) * .05;
}
