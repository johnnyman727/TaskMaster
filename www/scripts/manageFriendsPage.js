contactToBeDeleted = null;

// Used everytime we load the page
function updateManageFriendsListHTML(cList) {


	$("#manageFriendsContent > ul").remove();
	list = $('<ul data-role="listview">');
	var ulFriendsNode = $('<li id="manageFriendsList" data-role="list-divider" role="header">Manage Friends and Groups</li>');
	list.append(ulFriendsNode);

	$('.manageFriends').remove();

	for (var i=0; i<cList.contacts.length; i++){

		if (cList.contacts[i] == me){
			continue;
		}

		var listItem = $('<li data-theme="c" class="manageFriends"></li>').attr("id", "manageFriendListItem-" + cList.contacts[i].id);
	    var profPic = $('<img class="ui-li-thumb"></img>').attr('src', cList.contacts[i].imgPath);
	   	var name = $('<h1></h1>').text(cList.contacts[i].name);
	   	var deleteButton = $('<div data-role="button" data-inline="true" data-mini="true" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="c" ><span class="ui-btn-corner-all"><span class="ui-btn-text">Delete</span></span></div>');
	   	deleteButton.attr('id','deleteButton-'+cList.contacts[i].id);

	    listItem.append(profPic, name, deleteButton);

	    deleteButton.click({contact:cList.contacts[i]}, function(event) {
	    	contactToBeDeleted = event.data.contact;
	    	$('#deleteName').text(contactToBeDeleted.name);
			$( "#deleteNotification" ).popup( "open" );
		});
	    ulFriendsNode.after(listItem);    
	}
	$('#manageFriendsContent').prepend(list);
	list.listview('refresh');
}


$(document).ready(function(){
	$('.configureFriendsButton').click(function(){updateManageFriendsListHTML(addedFriends);});

	updateManageFriendsListHTML(addedFriends);

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
		}

		$( "#deleteNotification" ).popup( "close" );
	});
})