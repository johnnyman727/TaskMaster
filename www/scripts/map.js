var map = null;
function initialize() {
    
}


$('#home-map').live("pageshow", function() {
		$('#map_canvas').gmap('refresh');
});
$('#home-map').live("pageinit", function() {
		$('#map_canvas').gmap({'center': '42.2935, -71.2639'});
		$('#map_canvas').gmap('option', 'zoom', 15);
		$('#map_canvas').gmap('addMarker', {'id': 'm1', 'position': '42.2935, -71.2639', 'bounds':false});
});

	
$(document).bind('pageinit',initialize);
$('#map_canvas').bind('click',initialize);
