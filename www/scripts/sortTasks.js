sortMethod = 'owner';
$(document).ready(function(){
	$('#sortBy').change(function(){
		sortMethod = $(this).val();
		updateContentHTML();
	});
});
