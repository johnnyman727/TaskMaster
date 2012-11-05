
/* On click friend item handler */
function toggleContactState(event){
	var id = event.data.id
	friendElement = $('#'+id)
	if (addedContacts.hasContact(id)){
		//remove the contact
		addedContacts.removeContact(id);
		//change the style
		friendElement.removeClass('ui-btn-hover-f');
		friendElement.removeClass('ui-btn-up-f');
		friendElement.addClass('ui-btn-up-c');
		friendElement.removeClass('ui-btn-hover-c');
		friendElement.attr('data-theme','c');
	}else{
		//add the contact
		addedContacts.addContact(phoneContacts.getContact(id));
		//change the style
		friendElement.removeClass('ui-btn-hover-c');
		friendElement.removeClass('ui-btn-up-c');
		friendElement.addClass('ui-btn-hover-f');
		friendElement.addClass('ui-btn-up-f');
		
		friendElement.attr('data-theme','f');
	}
}

/* Populate the HTML list */
function updateAddFriendsHTML(cList){
	var ulFriendsNode = $("#addFriendsList");
	var liExample = $("#addFriendsList > li:first").clone()
	ulFriendsNode.empty();
	
	for (var i=0; i<cList.contacts.length; i++){
		var friendLI = liExample.clone();
		//Make the theme consistant
		friendLI.removeClass('ui-btn-up-a ui-btn-up-b ui-btn-up-c ui-btn-up-d ui-btn-up-e ui-btn-up-f');
		friendLI.addClass('ui-btn-up-c');
		friendLI.attr('data-theme','c');
		
		//Add button functionality
		var friendButton = friendLI.find('a:first');
		
		//Set the handler
		friendButton.click({id:cList.contacts[i].id},toggleContactState);
		
		//Change the image and the name, assign an id
		friendLI.find('img:first').attr('src',cList.contacts[i].imgPath);
		friendLI.find('h1:first').html(cList.contacts[i].name);
		friendLI.attr('id',cList.contacts[i].id);
		
		//Add friend node to the ul
		ulFriendsNode.append(friendLI);
	}
}


/*
 * 
 * 
 * 
 * Shared Friends Bar
 * 
 * 
 * 
 * 
 */
/* Toggle the state of the element */

selectedContacts = new ContactList();
selectedContacts.addContact(me)

function toggleSelected(event){
	var id = event.data.id;
	var fullImgPath = addedContacts.getContact(id).imgPath.split('/');
	var imgFilename = fullImgPath.pop().split('.');
	
	if (selectedContacts.hasContact(id)){
		//remove the contact
		selectedContacts.removeContact(id);
		//change the style
		imgFilename[0] += '_Unselected';
	}else{
		//add the contact
		selectedContacts.addContact(addedContacts.getContact(id));
		//change the style
		imgFilename[0] += '_Selected';
	}
	imgFilename = imgFilename.join('.');
	fullImgPath.push(imgFilename);
	fullImgPath = fullImgPath.join('/');
	
	$('.bar-'+id+' > img').attr('src',fullImgPath);
}

/* Populate the HTML list */
function updateSharedFriendsHTML(cList){
	cList.sort()
	
	//Empty the list
	ulFriendsNode = $('.shareFriendsList')
	ulFriendsNode.empty()
	
	
	//Re-Add each element
	for (var i=0; i<cList.contacts.length; i++){
		//create and setup the li element
		var friendLI = $('<li>');
		friendLI.attr('class','bar-'+cList.contacts[i].id)
		
		//create the anchor element
		
		//image
		var imgPathItems = cList.contacts[i].imgPath.split('/');
		var imgFilenameItems = imgPathItems[imgPathItems.length-1].split('.');
		var imgFilename = imgFilenameItems[0];
		var imgExtension = imgFilenameItems[1];
		if (selectedContacts.hasContact(cList.contacts[i].id)){
			imgFilename += '_Selected.' + imgExtension;
		}else{
			imgFilename += '_Unselected.' + imgExtension;
		}
		imgPathItems[imgPathItems.length-1] = imgFilename;
		var finalImgPath = imgPathItems.join('/')
		var friendImg = $('<img>');
		friendImg.attr('src',finalImgPath);
		
		friendLI.append(friendImg);
		
		//handler
		friendLI.click({id:cList.contacts[i].id},function(e){
			toggleSelected(e)
			updateContentHTML()
		});
		
		//add the li element to the DOM
		ulFriendsNode.append(friendLI);
	}
}

function updateTaskDetailsHTML(task){
	alert('changing the task details page');
}


listTemplate = null;
headerTemplate = null;
listItemTemplate = null;
function updateContentHTML(){
	selectedContacts.sort();
	//task list page
	console.log('changing the inner content frames');
	
	//FIXME: empty the task list page here then build it again
	if (listTemplate==null){
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
		
		console.log(contact.name);
		
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
			contactTaskList.append(listItemElement)
			console.log(task.title)
		}
		taskListContainer.append(contactTaskList);
	}
}

/*
 * 
 * 
 * 
 * End Shared Friends Bar
 * 
 * 
 * 
 * 
 */


/*Deal with clicking continue*/
function updateContinueButton(){
	continueButton = $('#continueButton')
	function continueEvent(event){
		for (var i=0;i<addedContacts.contacts.length;i++){
			phoneContacts.removeContact(addedContacts.contacts[i].id)
			updateAddFriendsHTML(phoneContacts)
		}
		updateSharedFriendsHTML(addedContacts);
	}
	continueButton.click(continueEvent)
}

$(document).ready(function () {updateAddFriendsHTML(phoneContacts);});
$(document).ready(updateContinueButton);


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
	
	/* Add Task Page */
})
