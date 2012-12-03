sortCondition = 'owner';
$(document).ready(function(){
	$('#sortBy').change(function(){
		sortCondition = $(this).val();
		updateContentHTML();
	});
});
