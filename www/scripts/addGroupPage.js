friendsAddedToGroup = new ContactList();;
function saveGroup() {
	var groupName = $('#addGroup-title').val();	
	
	if (!groupName || friendsAddedToGroup.contacts.length < 2) {

		//TODO: Make this an actual dialog 
		alert("You need to add a title and at least two friends in order to save.");
	}

	var newGroup = new Group(groupName, friendsAddedToGroup);

	addedFriends.addContact(newGroup);

	$.mobile.changePage('#friends-manage');

	clearPage();
}

// Used everytime we load the page
function updateGroupFriendsListHTML(cList) {

	friendsAddedToGroup = new ContactList();

	var ulFriendsNode = $("#availableFriendsForGrouping");

	$('.availableFriends').remove();

	for (var i=0; i<cList.contacts.length; i++){

		if (cList.contacts[i].hasOwnProperty('contactList') || cList.contacts[i] == me) {
			continue;
		}

		var listItem = $('<li data-theme="c" class="availableFriends"></li>').attr("id", "availableFriendListItem-" + cList.contacts[i].id);
	    var profPic = $('<img class="ui-li-thumb"></img>').attr('src', cList.contacts[i].imgPath);
	   	var name = $('<h1></h1>').text(cList.contacts[i].name);

	    listItem.append(profPic, name);

	    listItem.click({contact:cList.contacts[i]}, function(event) {
	    	// Change the styling
	    	$(this).toggleClass('ui-btn-hover-f');
	    	$(this).toggleClass('ui-btn-up-f');
	    	$(this).toggleClass('ui-btn-up-c');
	    	$(this).toggleClass('ui-btn-hover-c');

	    	var textfield = $('#addGroup-friendList');
	    	if (friendsAddedToGroup.hasContact(event.data.contact.id)) {
	    		friendsAddedToGroup.removeContact(event.data.contact.id);

	    		// Remove name from textfield
	    	} else {

	    		friendsAddedToGroup.addContact(event.data.contact);

	    	}
	    	textfield.val(friendsAddedToGroup.getContactNames().join(', '));
	    });

	    ulFriendsNode.after(listItem);    
	}
}

function clearPage() {

	$('.availableFriends').removeClass('ui-btn-hover-f');
	$('.availableFriends').removeClass('ui-btn-up-f');
	$('.availableFriends').addClass('ui-btn-up-c');
	$('.availableFriends').addClass('ui-btn-hover-c');
	$('#addGroup-friendList').val('');
	$('#addGroup-title').val('');	

}
$(document).ready(function () {
	//set the handler for the continue button
	updateGroupFriendsListHTML(addedFriends);
	$('#save-group-button').click(function (event){
		saveGroup();
	});
});