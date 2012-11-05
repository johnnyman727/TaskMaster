currentTask = null

function createTaskFromForm(){
	//title
	var newTask = new Task($('#addTask-title').val(),'You');
	$('#addTask-title').val('');
	
	//shared with
	if ($('#addTask-sharedWith').val()!=''){
		newTask.setSharedWith($('#addTask-sharedWith').val());//FIXME make these references to contacts
		$('#addTask-sharedWith').val('');
	}
	
	//location
	if ($('#addTask-location').val()!=''){
		newTask.setLocation($('#addTask-location',0,0).val());//FIXME latitude and longitude
		$('#addTask-location').val('')
	}
	
	//brand
	if ($('#addTask-brand').val()!=''){
		newTask.setBrand($('#addTask-brand').val());//FIXME make these references to contacts
		$('#addTask-brand').val('');
	}
	
	//maxPrice
	if ($('#addTask-price').val()!=''){
		newTask.setMaxPrice($('#addTask-price').val());//FIXME make these references to contacts
		$('#addTask-price').val('');
	}
	
	//FIXME deal with the priority
	$('#addTask-priority-high')
	$('#addTask-priority-medium')
	$('#addTask-priority-low')
	
	//notes
	$('#addTask-notes')
	if ($('#addTask-notes').val()!=''){
		newTask.setNotes($('#addTask-notes').val());//FIXME make these references to contacts
		$('#addTask-notes').val('');
	}
	
	me.taskList.addTask(newTask);
	updateContentHTML();
}

function removeCurrentTask(){
	if (currentTask.owner=="You"){
		me.taskList.removeTask(currentTask.id);
	}else{
		alert(currentTask.owner+' has been notified that you have finished his task.');
	}
	updateContentHTML();
}

$(document).ready(function(){$('#addTask-add').click(createTaskFromForm);})

$(document).ready(function(){$('#taskDetails-completeTask').click(removeCurrentTask)})
