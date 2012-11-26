
currentTask = null;
function updateTaskDetailsHTML(task){
	currentTask = task;
	if (task.title == null){
		$('#taskDetails-container-title').hide();
	}else{
		$('#taskDetails-title').val(task.title);
		$('#taskDetails-container-title').show();
	}
	if (task.sharedWith.isEmpty()){
		$('#taskDetails-container-sharedWith').hide();
	}else{
		sharedWith = task.getSharedContactNames();
		sharedWith = sharedWith.join(', ');

		$('#taskDetails-sharedWith').val(sharedWith);
		$('#taskDetails-container-sharedWith').show();
	}
	if (task.location == null){
		$('#taskDetails-container-location').hide();
	}else{
		$('#taskDetails-location').val(task.location);
		$('#taskDetails-container-location').show();
	}
	if (task.brand == null){
		$('#taskDetails-container-brand').hide();
	}else{
		$('#taskDetails-brand').val(task.brand);
		$('#taskDetails-container-brand').show();
	}
	if (task.maxPrice == null){
		$('#taskDetails-container-price').hide();
	}else{
		$('#taskDetails-price').val(task.maxPrice);
		$('#taskDetails-container-price').show();
	}
	if (task.priority == null){
		$('#taskDetails-container-priority').hide();
	}else{
		$('#taskDetails-priority').val(task.priority);
		$('#taskDetails-container-priority').show();
	}
	if (task.notes == null){
		$('#taskDetails-container-notes').hide();
	}else{	
		$('#taskDetails-notes').val(task.notes);
		$('#taskDetails-container-notes').show();
	}
}
