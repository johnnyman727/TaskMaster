contactToBeDeleted = null;

// Used everytime we load the page
function updateManageFriendsListHTML(cList) {


	// If we have to update the header, it means there are no 
	// items in the list. just return
	if (updateFriendsManagementHeader()) return;

	var list = $('#manageFriendsList');

	for (var i=0; i<cList.contacts.length; i++){

		if (cList.contacts[i] == me){
			continue;
		}

		var listItem = $('<li data-theme="c" class="manageFriends"></li>').attr("id", "manageFriendListItem-" + cList.contacts[i].id);
	    var profPic = $('<img class="ui-li-thumb"></img>').attr('src', cList.contacts[i].imgPath);
	   	var name = $('<h1></h1>').text(cList.contacts[i].name);
	   	var deleteButton = $('<div data-role="button" data-inline="true" data-mini="true" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="g" class="ui-btn ui-shadow ui-btn-corner-all ui-mini ui-btn-inline ui-btn-up-g"><span class="ui-btn-corner-all ui-btn-inner"><span class="ui-btn-text">Delete</span></span></div>');
	   	deleteButton.attr('id','deleteButton-'+cList.contacts[i].id);

	    listItem.append(profPic, name, deleteButton);

	    deleteButton.click({contact:cList.contacts[i]}, function(event) {
	    	contactToBeDeleted = event.data.contact;
	    	$('#deleteName').text(contactToBeDeleted.name);
			$( "#deleteNotification" ).popup( "open" );
		});
	    list.append(listItem);
	}

	$('#manageFriendsContent').prepend(list);
	list.listview();

}

$(document).bind('pagechange',function(e,d){
	if (d.toPage[0].id=='friends-manage'){
		updateManageFriendsListHTML(addedFriends);
	}
});

function updateFriendsManagementHeader() {

	// Remove the unordered list
	$("#manageFriendsList").remove();

	// Re-create the list
	list = $('<ul data-role="listview" id="manageFriendsList" data-inset="true" data-divider-theme="a">');

	// Create the list divider
	var listDivider = $('<li id="manageFriendsListDivider" data-role="list-divider" role="header">Manage Friends and Groups</li>');

	// Add the list divider to the ul
	list.append(listDivider);

	// Add the ul to the page DOM
	$('#manageFriendsContent').prepend(list);

	// If there isn't anyone in the list besides me
	if (addedFriends.contacts.length <= 1) {

		// Create a new li
		var newlistItem = $('<li id="noFriendsToManage">');

		// Add text to tell them to invite friends
		var text = $('<h3 style="white-space:normal;padding-left:5px;padding-right:3px;">You have no more friends to share with who have the app. Click the invite tab to ask them to share with you.</h3>');

		// Add the text to the li
		newlistItem.append(text);

		// Add the li after the list divider
		listDivider.after(newlistItem);

		// Turn the ul into a list
		list.listview();

		// Return 1 because there are no items
		return 1;
	}

	// Return 0 if there are items in the list
	return 0;
}

$(document).ready(function(){
	//$('.configureFriendsButton').click(function(){updateManageFriendsListHTML(addedFriends);});

	//updateManageFriendsListHTML(addedFriends);

	$( "#deleteFriend-cancelButton" ).bind( "click", function(event, ui) {
			$( "#deleteNotification" ).popup( "close" );
			contactToBeDeleted = null;
	});
	$( "#deleteFriend-deleteButton" ).bind( "click", function(event, ui) {
		if (contactToBeDeleted){
			addedFriends.removeContact(contactToBeDeleted.id);
			phoneContacts.addContact(contactToBeDeleted);		
			$('#manageFriendListItem-'+contactToBeDeleted.id).remove();
			contactToBeDeleted=null;
			updateFriendsManagementHeader();
		}

		$( "#deleteNotification" ).popup( "close" );
	});
})
