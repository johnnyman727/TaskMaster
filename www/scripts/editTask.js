function updateEditTaskHTML(){
	task = currentTask;
	if (task.title == null){
		$('#editTask-title').attr('placeholder','Title');
		$('#editTask-title').val('');
	}else{
		$('#editTask-title').val(task.title);
	}
	
	if (task.sharedWith.isEmpty()){
		$('#editTask-sharedWith').val('');
		$('#editTask-sharedWith').attr('placeholder','Tap friends to share with...');
	}else{
		sharedWith = task.getSharedContactNames();
		sharedWith = sharedWith.join(', ');

		$('#editTask-sharedWith').val(sharedWith);
	}
	if (task.location == null){
		$('#editTask-location').val('');
		$('#editTask-location').attr('placeholder','Location');
	}else{
		$('#editTask-location').val(task.location);
	}
	if (task.brand == null){
		$('#editTask-brand').val('');
		$('#editTask-brand').attr('placeholder','Brand');
	}else{
		$('#editTask-brand').val(task.brand);
	}
	if (task.maxPrice == null){;
		$('#editTask-price').val('');
		$('#editTask-price').attr('placeholder','Maximum Price');
	}else{
		$('#editTask-price').val(task.maxPrice);
	}
	if (task.priority == null){
		$('#editTask-priority').val('');
		$('#editTask-priority').attr('placeholder','Priority');
	}else{
		$('#editTask-priority').val(task.priority);
	}
	if (task.notes == null){
		$('#editTask-notes').val('');
		$('#editTask-notes').attr('placeholder','Additional Notes...');
	}else{	
		$('#editTask-notes').val(task.notes);
	}
}

function editTaskFromForm(){
	//title
	var updatedTask = new Task($('#editTask-title').val(),me);
	
	//shared with
	if ($('#editTask-sharedWith').val()!=''){
		contactNames = $('#editTask-sharedWith').val().split(', ');
		for (var i=0; i<contactNames.length; i++){
			updatedTask.shareWith(addedFriends.getContact(Contact.nameToId(contactNames[i])));
		}
	}
	
	//location
	if ($('#editTask-location').val()!=''){
		updatedTask.setLocation($('#editTask-location',0,0).val());//FIXME latitude and longitude
	}
	
	//brand
	if ($('#editTask-brand').val()!=''){
		updatedTask.setBrand($('#editTask-brand').val());
	}
	
	//maxPrice
	if ($('#editTask-price').val()!=''){
		updatedTask.setMaxPrice($('#editTask-price').val());
	}
	
	//FIXME deal with the priority
	$('#addTask-priority-high')
	$('#addTask-priority-medium')
	$('#addTask-priority-low')
	
	//notes
	$('#addTask-notes')
	if ($('#addTask-notes').val()!=''){
		updatedTask.setNotes($('#addTask-notes').val());
	}
	me.taskList.replaceTask(currentTask.id,updatedTask);
	
}
/*
function removeCurrentTask(){
	currentTask.owner.taskList.removeTask(currentTask.id);
	if (currentTask.owner.name!='Me'){
		alert(currentTask.owner.name+' has been notified that you have finished his task.');
	}
	updateContentHTML();
}*/

$(document).ready(function(){
	$('#taskDetails-editTask').click(updateEditTaskHTML);
	$('#editTask-save').click(editTaskFromForm);
});
