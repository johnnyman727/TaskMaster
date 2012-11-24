listTemplate = null;
headerTemplate = null;
listItemTemplate = null;
loadedUpdateContentHTML = false;
function updateContentHTML(){
	selectedContacts.sort();
	/*
	 * 
	 * Task List Page
	 * 
	 */
	
	//FIXME: empty the task list page here then build it again
	if (!loadedUpdateContentHTML){
		
		loadedUpdateContentHTML = true;
		listTemplate = $('#hasTasks > ul')[0];
		listTemplate = $(listTemplate).clone();

		headerTemplate = listTemplate.children('li')[0];
		headerTemplate = $(headerTemplate).clone();

		listItemTemplate = listTemplate.children('li')[1];
		listItemTemplate = $(listItemTemplate).clone();
		
		listTemplate.empty()
	}
	
	$('#hasTasks > ul').remove();
	var taskListContainer = $('#hasTasks');
	
	for (var i=0;i<selectedContacts.contacts.length;i++){
		var contact = selectedContacts.contacts[i];
		
		var contactTaskList = listTemplate.clone();
		
		var contactTaskListHeader = headerTemplate.clone();
		if (contact.name == 'Me'){
			contactTaskListHeader.html('My Tasks:');
		}else{
			contactTaskListHeader.html(contact.name + '\'s Tasks:');
		}
		contactTaskList.append(contactTaskListHeader);
		
		for (var j=0;j<contact.taskList.tasks.length;j++){
			var task = contact.taskList.tasks[j];
			listItemElement = listItemTemplate.clone();
			listItemElement.find('a').html(task.title);
			listItemElement.find('a').attr('href','#taskDetailsPage');
			listItemElement.find('a').click({theTask:task},function(e){updateTaskDetailsHTML(e.data.theTask)});
			contactTaskList.append(listItemElement);
		}
		taskListContainer.append(contactTaskList);
	}
	
	/*
	 * 
	 * Add Task Page
	 * 
	 */
	selectedNames = null;
	for (var i=0; i<selectedContacts.contacts.length; i++){
		if (selectedContacts.contacts[i].name == 'Me'){
			continue;
		}
		if (selectedNames==null){
			selectedNames = selectedContacts.contacts[i].name;
		}else{
			selectedNames += ', ' + selectedContacts.contacts[i].name;
		}
	}
	$('#addTask-sharedWith').val(selectedNames);
}



//formatting home pages
$(document).ready(function(){
	/* Task List Page */
	//hide all of the content so that we can grab the height of the empty div
	$('#noTasks').hide()
	$('#hasTasks').hide()
	$('.shareFriendsList').hide()
	
	//height of the empty div - height of the header padding
	contentHeight = $('#home-taskList').height();
	$('.home-contentWrapper').height(contentHeight);
	$('.home-contentWrapper_header').height(contentHeight-53);
	$('.home-contentWrapper_headerfooter').height(contentHeight-53-42);
	
	//show the content again
	$('#hasTasks').show()
	$('.shareFriendsList').show()
});
