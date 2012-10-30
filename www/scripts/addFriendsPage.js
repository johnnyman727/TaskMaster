
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
		friendElement.addClass('ui-btn-hover-c');
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
		
		//Change the image and the name
		friendLI.find('img:first').attr('src',cList.contacts[i].imgPath);
		friendLI.find('h1:first').html(cList.contacts[i].name);
		
		//Assign the li an id
		friendLI.attr('id',cList.contacts[i].id);
		
		//Add friend node to the ul
		ulFriendsNode.append(friendLI);
	}
}

/*Continue Button Handler*/
function continueEvent(event){
	//FIXME: add people to the master list
}

function updateContinueButton(){
	continueButton = $('#continueButton')
	continueButton.click(continueEvent)
}

$(document).ready(function () {updateAddFriendsHTML(phoneContacts); updateContinueButton();});

//$.cookie('phoneContacts',phoneContacts)
//$.cookie('addedContacts',addedContacts)
