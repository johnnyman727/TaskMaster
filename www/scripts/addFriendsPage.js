
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
	friendElement = $('#'+id);
	friendElement.toggleClass('selected');
	if (selectedContacts.hasContact(id)){
		//remove the contact
		selectedContacts.removeContact(id);
		//change the style
		friendElement.removeClass('ui-btn-hover-f');
		friendElement.removeClass('ui-btn-up-f');
		friendElement.addClass('ui-btn-up-c');
		friendElement.removeClass('ui-btn-hover-c');
		friendElement.attr('data-theme','c');
	}else{
		//add the contact
		selectedContacts.addContact(addedContacts.getContact(id));
		//change the style
		friendElement.removeClass('ui-btn-hover-c');
		friendElement.removeClass('ui-btn-up-c');
		friendElement.addClass('ui-btn-hover-f');
		friendElement.addClass('ui-btn-up-f');
		
		friendElement.attr('data-theme','f');
	}
}

/* Populate the HTML list */
function updateSharedFriendsHTML(cList){
	return
	//FIXME: make this work
	//NOTE: the iframe does not work via jQuery, use normal javascript
	
	//For cross-platform compatibility
	$('#friendsList').contents()
	function iframeRef( frameRef ) {
		return frameRef.contentWindow ? frameRef.contentWindow.document : frameRef.contentDocument
	}
	iframeInside = iframeRef(document.getElementById('friendsList'))
	console.log(iframeInside)
	var ulFriendsNode = document.getElementById('friendsList').contentWindow.document.getElementById("shareFriendsList");
	//getElementById("shareFriendsList");
	console.log(ulFriendsNode)
	console.log(document.getElementById('friendsList'))
	return
	//empty the ul
	while (ulFriendsNode.hasChildNodes()){
		ulFriendsNode.removeChild(ulFriendsNode.lastChild)
	}
	
	for (var i=0; i<cList.contacts.length; i++){
		//create and setup the li element
		var friendLI = document.createElement('li');
		friendLI.setAttribute('id',cList.contacts.id)
		//image
		var friendImg = document.createElement('img');
		friendImg.setAttribute('src',cList.contacts[i].imgPath);
		friendLI.appendChild(friendImg);
		//name
		firstName = cList.contacts[i].name.split(' ')[0];
		var friendName = document.createTextNode(firstName);
		friendLI.appendChild(friendName);
		//handler
		friendLI.onclick = toggleSelected;
		
		//add the li element to the DOM
		ulFriendsNode.appendChild(friendLI);
		
		//Set the handler
		friendButton.click({id:cList.contacts[i].id},toggleSelected);
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
		//FIXME: remove people from the master list
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
	
	//height of the empty div - height of the header padding
	contentHeight = $('#home-taskList').height()-53;
	console.log(contentHeight);
	console.log($('#home-contentWrapper').height());
	$('.home-contentWrapper').height(contentHeight);
	console.log($('#home-contentWrapper').height());
	
	//show the content again
	$('#hasTasks').show()
	
	/* Add Task Page */
})
