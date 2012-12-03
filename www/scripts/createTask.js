currentTask = null

function createTaskFromForm(){
	//title
	var newTask = new Task($('#addTask-title').val(),me);
	$('#addTask-title').val('');
	
	//shared with
	if ($('#addTask-sharedWith').val()!=''){
		contactNames = $('#addTask-sharedWith').val().split(', ');
		for (var i=0; i<contactNames.length; i++){
			newTask.shareWith(addedFriends.getContact(Contact.nameToId(contactNames[i])));
		}
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
	
	newTask.setPriority($('.addTask-priority:checked').val());
	
	//notes
	$('#addTask-notes')
	if ($('#addTask-notes').val()!=''){
		newTask.setNotes($('#addTask-notes').val());//FIXME make these references to contacts
		$('#addTask-notes').val('');
	}
	
	me.taskList.addTask(newTask);
	updateContentHTML();
}

$(document).bind('pagechange',function(e,d){
 	if (d.toPage[0].id=='home-addTask'){
		$('#addTask-priority-high').removeAttr('checked');
		$('#addTask-priority-high').checkboxradio('refresh');
		$('#addTask-priority-medium').removeAttr('checked');
		$('#addTask-priority-medium').checkboxradio('refresh');
		$('#addTask-priority-low').attr('checked','checked');
		$('#addTask-priority-low').checkboxradio('refresh');
 	}
});

$(document).ready(function(){
	$('#addTask-add').click(createTaskFromForm);
	$('#addTask-add').click( function(event){
		$('#firstTimeAddTask').hide();
	});
})

