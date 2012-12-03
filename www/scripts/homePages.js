var completedTask_ = false;
var showSpecificTask;
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

	 if (completedTask_) {
	 	console.log($('#completeTask'));
	 	$('#completeTask').popup('open');
	 	completedTask_ = false;
	 }
	$('#taskLists > ul').remove();
	//build each list
	if (sortMethod=='owner'){
		for (var i=0; i<selectedContacts.contacts.length; i++){
			var aTaskList = $('<ul>');
			aTaskList.attr('id','taskList'+selectedContacts.contacts[i].id);
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
						var taskLink = $('<a>').text(groupMember.name + ' has no tasks');
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
						if (tasks[j].pending){
							console.log('making something blue');
							aTask.attr('pending','true');
						}
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
			$('.groupHeadings').toggleClass('ui-bar-a ui-bar-f');
			
		}
	}else{
		sortedTasks = new TaskList();
		for (var i=0;i<selectedContacts.contacts.length; i++){
			var contact = selectedContacts.contacts[i];
			for (var j=0; j<contact.taskList.tasks.length;j++){
				var task = contact.taskList.tasks[j];
				sortedTasks.addTask(task);
			}
		}
		sortedTasks.sort(sortMethod);
		console.log(sortedTasks)
		var taskList = $('<ul>');
		taskList.attr('id','taskListPriority');
		taskList.attr('data-divider-theme','a');
		taskList.attr('data-inset','true');
		
		var lastPriority = null;
		
		var nextDistanceMarker = 0;
		var distanceMarkers = ['25+ miles','10-25 miles','5-10 miles','1-5 miles','Less than a mile'];
		var distanceMarkerValues = [Number.POSITIVE_INFINITY,25,10,5,1];
		
		for (var i=0;i<sortedTasks.tasks.length;i++){
			var task = sortedTasks.tasks[i];
			if (sortMethod=='priority'){
				if (task.priority!= lastPriority){
					taskList.append($('<li data-role="list-divider">Priority: '+task.priority+'</li>'));
					lastPriority=task.priority;
				}
			}else if (sortMethod=='location'){
				dist = distance(myLocation_lat,myLocation_lng,task.lat,task.lng);
				
				console.log(dist);
				if (dist>nextDistanceMarker){
					var distanceLabel;
					while(dist>nextDistanceMarker){
						nextDistanceMarker = distanceMarkerValues.pop();
						distanceLabel = distanceMarkers.pop();
					}
					taskList.append($('<li data-role="list-divider">'+distanceLabel+'</li>'));
				}
			}
			//create the li
			var taskTitle = task.owner.name + ': ' + task.title;
			var taskLink = $('<a>').text(taskTitle);
			taskLink.click({theTask:task},function(e){
				updateTaskDetailsHTML(e.data.theTask);
			});
			taskLink.attr('href','#taskDetailsPage');
			var aTask = $('<li>').append(taskLink);
			if (task.pending){
				aTask.attr('pending','true');
			}
			taskList.append(aTask);
		}
		
		$('#taskLists').append(taskList);
		taskList.listview();
		$('#taskListMe [pending="true"]').toggleClass('ui-btn-up-c ui-btn-up-e').attr('data-theme','e');
		if (!sortedTasks.tasks.length){
		}//FIXME: deal with the case where there are no tasks
	}
	//remove the icon on the list
	$('#taskLists .noIcon').removeAttr('data-icon');
	$('#taskLists .noIcon span').remove();
	$('#taskLists .noIcon').removeClass('ui-btn-icon-right');
	$('#taskLists .noIcon').removeClass('ui-li-has-arrow');
	
	$('#taskLists [pending="true"]').toggleClass('ui-btn-up-c ui-btn-up-e').attr('data-theme','e');
	$('#taskLists [proximity="true"]:not([pending="true"])').toggleClass('ui-btn-up-c ui-btn-up-f').attr('data-theme','e');
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

	 $('#map_canvas').gmap('clear', 'markers');

	 $('#map_canvas').gmap('closeInfoWindow');

	 $('#map_canvas').gmap('refresh');

	 createUserLocationOverlay();

	 // For each selected contact
	 $.each(selectedContacts.contacts, function(index, contact) {

	 	if (contact.hasOwnProperty('contactList')) {
	 		return true;
	 	} else {
	 		// For each of their tasks
	 	$.each(contact.taskList.tasks, function(index1, task) {
	 		//	Create a new overlay
			createTaskOverlay(contact, task);
	 		});
	 	}

	 });

	 if (showSpecificTask) {
	 	$('#map_canvas').gmap('find', 'markers', { }, function(marker) {
    	if(marker.id == ('marker-' +showSpecificTask.id)){
    		 google.maps.event.trigger(marker, 'click'); 
    	}
});
	 }
	 
	 /*
	  * 
	  * Edit Task Page
	  * 
	  */
	$('#editTask-sharedWith').val(selectedNames);
	$('#editTask-sharedWith').trigger('keyup');
}

function createUserLocationOverlay() {
	var marker = $('#map_canvas').gmap('addMarker', {zIndex : 999, 'position': 42.3284308.toString() + "," + -71.1197732.toString(), 'bounds': true, 'flat' : false,  'icon' :new google.maps.MarkerImage("../assets/location-icon.png",
			      // This marker is 20 pixels wide by 32 pixels tall.
			      new google.maps.Size(16, 16),
			      // The origin for this image is 0,0.
			      new google.maps.Point(0,0),
			      // The anchor for this image is the base of the flagpole at 0,32.
			      new google.maps.Point(0, 16),

			      new google.maps.Size(16, 16)) 
		});
}
function createTaskOverlay(contact, task) {
	var marker = $('#map_canvas').gmap('addMarker', {id : 'marker-' + task.id, 'position': task.lat_long_string(), 'bounds': true, 'flat' : false,  'icon' :new google.maps.MarkerImage(contact.imgPath,
			      // This marker is 20 pixels wide by 32 pixels tall.
			      new google.maps.Size(32, 32),
			      // The origin for this image is 0,0.
			      new google.maps.Point(0,0),
			      // The anchor for this image is the base of the flagpole at 0,32.
			      new google.maps.Point(0, 32),

			      new google.maps.Size(32, 32)) }).click(function() {
				var innerHTML = '<p> Title:' + task.title + '</p><p>Notes: '+ ( task.notes ? task.notes : "No Notes" )+ ' <button type="button" href="#taskDetailsPage" onclick="goToTaskDetails(\'' + contact.id + '\',\'' + task.id + '\' )">Task Details</button>';
				$('#map_canvas').gmap('openInfoWindow', {'content': innerHTML}, this);
			});
}
function goToTaskDetails(ownerID, taskID) {
	var task = selectedContacts.getContact(ownerID).taskList.getTask(taskID);
	updateTaskDetailsHTML(task)
	$.mobile.changePage('#taskDetailsPage');
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
