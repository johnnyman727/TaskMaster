function friendTaskComplete(task){
	
	contact = task.sharedWith.selectRandomContact();
	
	var popup = $('<div data-role="popup" id="taskCompleteNotification" ></div>');
	var message = $('<p style="text-align:center;">').text(contact.name+' just completed your task "'+task.title+'"!');
	var viewTaskButton = $('<button id="viewTask_button" data-theme="f">View the Task</button>');
	var closeButton = $('<button id="closeFriendTaskComplete_button">Close</button>');
	
	currentTask = task;
	task.pending = true;
	task.completedBy = contact;
		
	viewTaskButton.click(function(){
		updateTaskDetailsHTML(task);
		$.mobile.changePage('#taskDetailsPage');
		popup.popup('close');
		updateContentHTML();
	});
	closeButton.click(function(){
		popup.popup('close');
		updateContentHTML();
	});
	
	popup.append(message,viewTaskButton,closeButton);
	
	$('.ui-page-active .ui-content').append(popup);
	$('.ui-page-active .ui-content').trigger('create');
	
	popup.popup('open');
}
