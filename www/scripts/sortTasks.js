sortMethod = 'owner';
$(document).ready(function(){
	$('#sortBy').change(function(){
		sortMethod = $(this).val();
		updateContentHTML();
	});
});

function distance(a_lat,a_lng,b_lat,b_lng){
	x = 69.1*(a_lat-b_lat);
	y = 69.1*(a_lng-b_lng)*Math.cos(a_lat*Math.PI/180.0);
	return Math.sqrt(x*x+y*y);
}
