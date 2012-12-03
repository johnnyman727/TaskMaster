
/*
 * homePages.js
 * 
 * this script will manage updates to the home pages (task list, add 
 * task, map) that occur when friends are selected and deselected.
 * 
 * 
 */
function updateContentHTML(){
	selectedContacts.sort();
	/*
	 * 
	 * Task List Page
	 * 
	 */
	$('#taskLists > ul').remove();
	//build each list
	for (var i=0; i<selectedContacts.contacts.length; i++){
		var aTaskList = $('<ul>');
		aTaskList.attr('data-divider-theme','a');
		aTaskList.attr('data-inset','true');
		var listOwner = selectedContacts.contacts[i];
		
		//add list title
		if (listOwner==me){//I am the owner
			var listTitle = $('<li>').append($('<a>').text('My Tasks'));
		}else if(listOwner.hasOwnProperty('contactList')){//A group is the owner
			var listOwnerName = listOwner.name;
			var listTitle = $('<li data-theme="a" class="groupHeadings">').append($('<a>').text(listOwnerName));
		}else{//A contact is the owner
			var listOwnerName = listOwner.name.split(' ')[0];
			var listTitle = $('<li>').append($('<a>').text(listOwnerName+'\'s Tasks'));
		}
		listTitle.attr('data-role','list-divider');
		listTitle.attr('role','heading');
		aTaskList.append(listTitle);
		
		if(listOwner.hasOwnProperty('contactList')){//add tasks of a group
			for (var j=0; j<listOwner.contactList.contacts.length; j++){
				aTaskList.attr('data-divider-theme','f')
				var groupMember = listOwner.contactList.contacts[j];
				var tasks = groupMember.taskList.tasks;
				var header = $('<li data-role="list-divider">'+groupMember.name.split(' ')[0]+'\'s Tasks</li>')
				aTaskList.append(header);
				if (tasks.length){
					for (var k=0; k<tasks.length; k++){
						var taskLink = $('<a>').text(tasks[k].title);
						taskLink.click({theTask:tasks[k]},function(e){updateTaskDetailsHTML(e.data.theTask)});
						taskLink.attr('href','#taskDetailsPage');
						var aTask = $('<li>').append(taskLink).bind('swipe', function(e) { alert('SWIPE');});
						aTaskList.append(aTask);
					}
				}else{
					var taskLink = $('<a>').text(listOwnerName + ' has no tasks');
					var aTask = $('<li>').append(taskLink);
					aTask.addClass('noIcon');
					aTaskList.append(aTask);
				}
			}
		}else{//add tasks of a contact
			var tasks = listOwner.taskList.tasks;
			if (tasks.length){
				for (var j=0; j<tasks.length; j++){
					var taskLink = $('<a>').text(tasks[j].title);
					taskLink.click({theTask:tasks[j]},function(e){updateTaskDetailsHTML(e.data.theTask)});
					taskLink.attr('href','#taskDetailsPage');
					var aTask = $('<li>').append(taskLink);
					aTaskList.append(aTask);
				}
			}else{
				if (listOwner==me){
					var taskLink = $('<a>').text('You have no tasks');
				}else{
					var taskLink = $('<a>').text(listOwnerName + ' has no tasks');
				}	
				var aTask = $('<li>').append(taskLink);
				aTask.addClass('noIcon');
				aTaskList.append(aTask);
			}
		}
		$('#taskLists').append(aTaskList);
		aTaskList.listview();
		$('.groupHeadings').toggleClass('ui-bar-a ui-bar-f')
	}
	//remove the icon on the list
	$('#taskLists .noIcon').removeAttr('data-icon');
	$('#taskLists .noIcon span').remove();
	$('#taskLists .noIcon').removeClass('ui-btn-icon-right');
	$('#taskLists .noIcon').removeClass('ui-li-has-arrow');
	/*
	 * 
	 * End Task List Page
	 * 
	 */
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
	$('#addTask-sharedWith').trigger('keyup');

	/*
	*
	* End Add Task Page
	*
	/
	/*
	 * 
	 * Maps Page
	 * 
	 */

	 // $('#map_canvas').gmap('clearMarkers');

	 // For each selected contact
	 $.each(selectedContacts.contacts, function(index, contact) {

	 	// For each of their tasks
	 	$.each(contact.taskList.tasks, function(index1, task) {
		
		if (task.location){
		 	//	Create a new overlay
			$('#map_canvas').gmap('addMarker', {'position': task.lat_long_string(), 'bounds': true}).click(function() {
				$('#map_canvas').gmap('openInfoWindow', {'content': '<button type="button">Click Me!</button>' }, this);
				});
		}
	 	});
	 });
	 
	 /*
	  * 
	  * Edit Task Page
	  * 
	  */
	$('#editTask-sharedWith').val(selectedNames);
	$('#editTask-sharedWith').trigger('keyup');
}

//formatting home pages
$(document).ready(function(){
	
	/* Task List Page */
	//hide all of the content so that we can grab the height of the empty div
	$('#taskLists').hide();
	$('.shareFriendsList').hide();
	
	//height of the empty div - height of the header padding
	contentHeight = $('#home-taskList').height();
	$('.home-contentWrapper').height(contentHeight);
	$('.home-contentWrapper_header').height(contentHeight-53);
	$('.home-contentWrapper_headerfooter').height(contentHeight-53-42);
	//show the content again
	$('#taskLists').show();
	$('.shareFriendsList').show();
	
	//remove the icon on the list
	$('#taskLists .noIcon').removeAttr('data-icon');
	$('#taskLists .noIcon span').remove();
	$('#taskLists .noIcon').removeClass('ui-btn-icon-right');
	$('#taskLists .noIcon').removeClass('ui-li-has-arrow');
});

$(document).bind('pagechange',function(e,d){
	if (d.toPage[0].id=='home-taskList'){
		updateContentHTML();
	}
});
