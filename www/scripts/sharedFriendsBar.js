/* Toggle the state of the element */

selectedContacts = new ContactList();
selectedContacts.addContact(me)

function toggleSelected(event){
	var id = event.data.id;
	console.log('clicked ' + id);
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
	var ulFriendsNode = window.frames['innerContent'].document.getElementById("shareFriendsList");
	var liExample = $("#shareFriendsList > li:first").clone();
	
	for (var i=0; i<cList.contacts.length; i++){
		var friendLI = liExample.clone();
		
		//Add button functionality
		var friendButton = friendLI.find('a:first');
		
		//Set the handler
		friendButton.click({id:cList.contacts[i].id},toggleSelected);
		
		//Change the image and the name
		friendLI.find('img:first').attr('src',cList.contacts[i].imgPath);
		friendLI.find('span:first').html(cList.contacts[i].name.split(" ")[0]);
		
		//Assign the li an id
		friendLI.attr('id',cList.contacts[i].id);
		
		//Add friend node to the ul
		ulFriendsNode.append(friendLI);
	}
}

$('#home').ready(function () {updateSharedFriendsHTML(addedContacts)});
