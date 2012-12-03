function updateEditTaskHTML(){
	task = currentTask;
	if (task.owner != me) {
		$('#deleteTaskButton').hide();
	} else {
		$('#deleteTaskButton').show();
	}
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
	
	$('#editTask-priority-low').removeAttr('checked');
	$('#editTask-priority-medium').removeAttr('checked');
	$('#editTask-priority-high').removeAttr('checked');
	if (task.priority == null){
		$('#editTask-priority-low').attr('checked','checked');
	}else{
		$('#editTask-priority-'+task.priority).attr('checked','checked');
	}
	
	if (task.notes == null){
		$('#editTask-notes').val('');
		$('#editTask-notes').attr('placeholder','Additional Notes...');
	}else{	
		$('#editTask-notes').val(task.notes);
	}
}

$(document).bind('pagechange',function(e,d){
 	if (d.toPage[0].id=='editTaskPage'){
		$('#editTask-priority-high').checkboxradio('refresh');
		$('#editTask-priority-medium').checkboxradio('refresh');
		$('#editTask-priority-low').checkboxradio('refresh');
 	}
});

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
		updatedTask.setLocation($('#editTask-location').val(), random_lat(), random_long());
	}
	
	//brand
	if ($('#editTask-brand').val()!=''){
		updatedTask.setBrand($('#editTask-brand').val());
	}
	
	//maxPrice
	if ($('#editTask-price').val()!=''){
		updatedTask.setMaxPrice($('#editTask-price').val());
	}
	
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

deleteTask = function() {
	$('#deleteTaskConfirmation').popup('open');
}

$(document).ready(function(){
	$('#taskDetails-editTask').click(function(){
		updateEditTaskHTML();
		deselectAllContacts();
		selectContact(me);
		for (var i=0; i<currentTask.sharedWith.contacts.length; i++){
			selectContact(currentTask.sharedWith.contacts[i]);
		}
	});
	$('#editTask-save').click(function() {
		if ($('#editTask-title').val() == "") {
			$('#notifyTaskRequirementsEdit').popup();
			$('#notifyTaskRequirementsEdit').popup('open');
		}
		editTaskFromForm();
	});
	$('#deleteTask-deleteButton').click(function() {
		currentTask.owner.taskList.removeTask(currentTask.id);
		updateContentHTML();
		$.mobile.changePage('#home-taskList');
	});
	$('#deleteTask-cancelButton').click(function() {
		$('#deleteTaskConfirmation').popup('close');
	});
});
