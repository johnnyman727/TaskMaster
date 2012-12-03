currentTask = null

function createTaskFromForm(){
	//title
	if ($('#addTask-title').val()==''){
		return false;
	}
	var newTask = new Task($('#addTask-title').val(),me);
	$('#addTask-title').val('');
	
	//shared with
	if ($('#addTask-sharedWith').val()!=''){
		contactNames = $('#addTask-sharedWith').val().split(', ');
		for (var i=0; i<contactNames.length; i++){
			newTask.shareWith(addedFriends.getContact(Contact.nameToId(contactNames[i])));
			console.log(Contact.nameToId(contactNames[i]));
		}
		$('#addTask-sharedWith').val('');
	}
	
	//location
	console.log($('#addTask-location').val());
	if ($('#addTask-location').val()!=''){
		newTask.setLocation($('#addTask-location').val(),random_lat(),random_long());
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
	
	if (newTask.sharedWith.contacts.length){
		setTimeout(function(){
			friendTaskComplete(newTask);
		},Math.random()*20000+10000);
	}
	
	return true;
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
	$('#addTask-add').click( function(event){
		if (createTaskFromForm()){
			$.mobile.changePage('#home-taskList');
		}else{
			$('#notifyTaskRequirements').popup('open');
		}
		$('#firstTimeAddTask').hide();
	});
	
	$('#notifyTaskRequirements-okayButton').click(function (event) {
		$('#notifyTaskRequirements').popup( "close" );
	});
})

