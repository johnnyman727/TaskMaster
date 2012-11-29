/*
 * addFriendsPage.js
 * 
 * Manages actions that occur on the Add Friends page
 * 
 */
var requestToBeDeleted = null;
var contactToBeInvited = null;

function updateRequestsHTML(cList) {

	var ulFriendsNode = $("#requestsList");

	updateRequestHeader();

	$('.pendingRequest').remove();

	for (var i=0; i<cList.contacts.length; i++){

		var listItem = $('<li data-theme="c" class="pendingRequest"></li>').attr("id", "pendingRequestListItem-" + cList.contacts[i].id);
	    var profPic = $('<img class="ui-li-thumb"></img>').attr('src', cList.contacts[i].imgPath);
	   	var name = $('<h1></h1>').text(cList.contacts[i].name);
	    var rejectButton = $('<div data-role="button" data-inline="true" data-mini="true" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="g"><span class="ui-btn-corner-all"><span class="ui-btn-text">Delete</span></span></div>').attr('id', 'acceptButton-'+ cList.contacts[i].id);
	    var acceptButton = $('<div data-role="button" data-theme="f" data-inline="true" data-mini="true" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" ><span class=" ui-btn-corner-all"><span class="ui-btn-text">Accept</span></span></div>').attr('id', 'rejectButton-'+ cList.contacts[i].id);

	    rejectButton.click({contact:cList.contacts[i]}, function(event) {
	    	requestToBeDeleted = event.data.contact;
	    	$('#deleteRequestName').text(requestToBeDeleted.name);
			$( "#deleteRequestAssure" ).popup( "open" );
	    });

	    acceptButton.click({contact:cList.contacts[i]}, function(event) {
	    		addedFriends.addContact(event.data.contact);
	    		pendingContacts.removeContact(event.data.contact.id);
	    		$('#pendingRequestListItem-'+event.data.contact.id).remove();

	    		updateRequestHeader();
	    });

	    listItem.append(profPic, name, acceptButton, rejectButton);

	    ulFriendsNode.after(listItem);   
	}
}

 function updateRequestHeader() {
 	var ulFriendsNode = $("#requestsList");

	if (!pendingContacts.contacts.length) {
		ulFriendsNode.hide();
		return;
	} else {
		ulFriendsNode.show();
	}
 }

 function updateAddFriendsHeader() {
 	var ulFriendsNode = $("#addFriendsList");

	if (!phoneContacts.contacts.length) {
		var newlistItem = $('<li data-theme="c"><h3>You have no more friends to share with who have the app. Click the invite tab to ask them to share with you.</h3></li>');
		ulFriendsNode.after(newlistItem);
	} 

 }
function updateAddFriendsHTML(cList){
	/* Empties and populates the addFriends page according to the
	 * phoneContacts list
	 */
	 
	var ulFriendsNode = $("#addFriendsList");

	updateAddFriendsHeader();

	$('.friendWithApp').remove();

	for (var i=0; i<cList.contacts.length; i++){

		var listItem = $('<li data-theme="c" data-icon="plus" class="friendWithApp"></li>').attr("id", "addFriendsListItem-" + cList.contacts[i].id);
	    var profPic = $('<img class="ui-li-thumb"></img>').attr('src', cList.contacts[i].imgPath);
	    var name = $('<h1></h1>').text(cList.contacts[i].name);
	    var inviteButton = $('<div data-role="button" data-theme="f" data-inline="true" data-mini="true" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" ><span class=" ui-btn-corner-all"><span class="ui-btn-text">Send Invite</span></span></div>').attr('id', 'rejectButton-'+ cList.contacts[i].id);

	    listItem.append(profPic, name, inviteButton);
		ulFriendsNode.after(listItem);

		inviteButton.click({contact:cList.contacts[i]}, function(event) {
	    	contactToBeInvited = event.data.contact;
	    	$('#sendInviteName').text(contactToBeInvited.name);
			$( "#sendInviteAssure" ).popup( "open" );
	    });
	}
}


$(document).ready(function () {
	updateAddFriendsHTML(phoneContacts);
	updateRequestsHTML(pendingContacts);

	$( "#deleteRequest-cancelButton" ).bind( "click", function(event, ui) {
			$( "#deleteRequestAssure" ).popup( "close" );
			requestToBeDeleted = null;
	});
	$( "#deleteRequest-deleteButton" ).bind( "click", function(event, ui) {
		if (requestToBeDeleted){
			addedFriends.removeContact(requestToBeDeleted.id);
			phoneContacts.addContact(requestToBeDeleted);		
			$('#pendingRequestListItem-'+requestToBeDeleted.id).remove();
			requestToBeDeleted=null;
		}

		updateRequestHeader();
		$( "#deleteRequestAssure" ).popup( "close" );

	});

	$( "#sendInvite-cancelButton" ).bind( "click", function(event, ui) {
			$( "#sendInviteAssure" ).popup( "close" );
			contactToBeInvited = null;
	});
	$( "#sendInvite-sendButton" ).bind( "click", function(event, ui) {
		if (contactToBeInvited){
			phoneContacts.removeContact(contactToBeInvited.id);
			addedFriends.addContact(contactToBeInvited);	
			console.log($('#addFriendsListItem-'+contactToBeInvited.id));	
			$('#addFriendsListItem-'+contactToBeInvited.id).remove();
			contactToBeInvited=null;
		}
		updateAddFriendsHeader();

		$( "#sendInviteAssure" ).popup( "close" );
	});
});

