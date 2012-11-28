function updateEditTaskHTML(){
	task = currentTask;
	if (task.title == null){
		$('#editTask-title').attr('placeholder','Title');
	}else{
		$('#editTask-title').val(task.title);
	}
	console.log(task)
	if (task.sharedWith.isEmpty()){
		$('#editTask-sharedWith').attr('placeholder','Tap friends to share with...');
	}else{
		sharedWith = task.getSharedContactNames();
		sharedWith = sharedWith.join(', ');

		$('#editTask-sharedWith').val(sharedWith);
	}
	if (task.location == null){
		$('#editTask-location').attr('placeholder','Location');
	}else{
		$('#editTask-location').val(task.location);
	}
	if (task.brand == null){
		$('#editTask-brand').attr('placeholder','Brand');
	}else{
		$('#editTask-brand').val(task.brand);
	}
	if (task.maxPrice == null){;
		$('#editTask-price').attr('placeholder','Maximum Price');
	}else{
		$('#editTask-price').val(task.maxPrice);
	}
	if (task.priority == null){
		$('#editTask-priority').attr('placeholder','Priority');
	}else{
		$('#editTask-priority').val(task.priority);
	}
	if (task.notes == null){
		$('#editTask-notes').attr('placeholder','Additional Notes...');
	}else{	
		$('#editTask-notes').val(task.notes);
	}
}
/*
function removeCurrentTask(){
	currentTask.owner.taskList.removeTask(currentTask.id);
	if (currentTask.owner.name!='Me'){
		alert(currentTask.owner.name+' has been notified that you have finished his task.');
	}
	updateContentHTML();
}*/

$(document).ready(function(){$('#taskDetails-editTask').click(updateEditTaskHTML)});
