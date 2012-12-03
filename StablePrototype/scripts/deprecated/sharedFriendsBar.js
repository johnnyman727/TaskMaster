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
	
	//FIXME: make this work
	//NOTE: the iframe does not work via jQuery, use normal javascript
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

$('#continueButton').click(function () {updateSharedFriendsHTML(addedContacts);});
