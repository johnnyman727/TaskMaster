var map = null;
function initialize() {
	alert('initializing map')
	var mapOptions = {
		center: new google.maps.LatLng(42.292612, -71.263247),
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map($("#map_canvas"),
	mapOptions);
}
	
$(document).bind('pageinit',initialize);
$('#map_canvas').bind('click',initialize);
