contactToBeDeleted = null;

// Used everytime we load the page
function updateManageFriendsListHTML(cList) {


	$("#manageFriendsContent > ul").remove();
	list = $('<ul data-role="listview" id="managedFriendsUL" data-inset="true" data-divider-theme="a">');
	var ulFriendsNode = $('<li id="manageFriendsList" data-role="list-divider" role="header">Manage Friends and Groups</li>');
	list.append(ulFriendsNode);

	if (addedFriends.contacts.length <= 1) {
		var newlistItem = $('<li><h3>You have no more friends to share with who have the app. Click the invite tab to ask them to share with you.</h3></li>');
		ulFriendsNode.append(newlistItem);

		$('#manageFriendsContent').prepend(list);
		list.listview();
		return;
	}

	$('.manageFriends').remove();
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

}

$(document).bind('pagechange',function(e,d){
	if (d.toPage[0].id=='friends-manage'){
		updateManageFriendsListHTML(addedFriends);
	}
});

function updateFriendsManagementHeader() {
	var ulFriendsNode = $('#manageFriendsList');

	if (addedFriends.contacts.length <= 1) {
		alert('howdy');
		var newlistItem = $('<li data-theme="c" style="height:50px"><h3>You have no more friends to share with who have the app. Click the invite tab to ask them to share with you.</h3></li>');
		ulFriendsNode.after(newlistItem);
	}
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
