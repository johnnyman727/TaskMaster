/*
 * addFriendsPage.js
 * 
 * Manages actions that occur on the Add Friends page
 * 
 */

function toggleAddedContact(id){
	/* Adds or removes friends from the added friends list and changes
	 * the style of the element appropriately (highlighting and
	 * unhighlighting the button in the listview)
	 */
	//find the html
	friendElement = $('#'+id);
	if (addedFriends.hasContact(id)){
		console.log(id+' removing');
		//remove the contact
		addedFriends.removeContact(id);
		//change the style
		//FIXME: try using friendElement.buttonMarkup({theme,'c'}).button('refresh');
		friendElement.removeClass('ui-btn-hover-f');
		friendElement.removeClass('ui-btn-up-f');
		friendElement.addClass('ui-btn-up-c');
		friendElement.removeClass('ui-btn-hover-c');
		friendElement.attr('data-theme','c');
	}else{
		console.log(id+' adding');
		//add the contact
		addedFriends.addContact(phoneContacts.getContact(id));
		//change the style
		//FIXME: try using friendElement.buttonMarkup({theme,'f'}).button('refresh');
		friendElement.removeClass('ui-btn-hover-c');
		friendElement.removeClass('ui-btn-up-c');
		friendElement.addClass('ui-btn-hover-f');
		friendElement.addClass('ui-btn-up-f');
		
		friendElement.attr('data-theme','f');
	}
}

function updateFirstUseAddFriendsHTML(cList){
	/* Empties and populates the addFriends page according to the
	 * phoneContacts list
	 */
	 
	var ulFriendsNode = $("#firstUseAddFriendsList");
	//at the moment this simple clones the first item, empties the list
	//and repopulates the list again. It works but it's not the cleanest
	//so we should probably fix it at somepoint
	var liExample = $("#firstUseAddFriendsList > li:first").clone()
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
		friendButton.click({id:cList.contacts[i].id},function(event){toggleAddedContact(event.data.id);});
		
		//Change the image and the name, assign an id
		friendLI.find('img:first').attr('src',cList.contacts[i].imgPath);
		friendLI.find('h1:first').html(cList.contacts[i].name);
		friendLI.attr('id',cList.contacts[i].id);
		
		//Add friend node to the ul
		ulFriendsNode.append(friendLI);
	}
}

$(document).ready(function () {
	updateFirstUseAddFriendsHTML(phoneContacts);
	//set the handler for the continue button
	$('#continueButton').click(function (event){
		for (var i=0;i<addedFriends.contacts.length;i++){
			phoneContacts.removeContact(addedFriends.contacts[i].id)
			updateAddFriendsHTML(phoneContacts)
		}
		updateSharedFriendsHTML(addedFriends);
	});
	
	//set the handler for the cancel button
	$('#addFriends-cancel').click(function (event){
		removeIDs = []
		for (var k=0; k<addedFriends.contacts.length; k++){
			if (phoneContacts.hasContact(addedFriends.contacts[k].id)){
				removeIDs.push(addedFriends.contacts[k].id)
			}
		}
		for (var k=0; k<removeIDs.length; k++){
			toggleAddedContact(removeIDs[k]);
		}
		updateSharedFriendsHTML(addedFriends);
	});
});
