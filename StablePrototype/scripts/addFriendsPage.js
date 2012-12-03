/*
 * addFriendsPage.js
 * 
 * Manages actions that occur on the Add Friends page
 * 
 */
var requestToBeDeleted = null;
var contactToBeInvited = null;

function updateRequestsHTML(cList) {

	$('.pendingRequest').remove();

	if (!cList.contacts.length) return;

	var lDivider = $("#requestsListDivider");

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

	    $('#RequestsList').append(listItem);
	     
	}
}

 function updateRequestHeader() {
 	var lDivider = $("#requestsListDivider");

	if (!pendingContacts.contacts.length) {
		lDivider.hide();
		return;
	} else {
		lDivider.show();
	}
 }


function updateAddFriendsHTML(cList){
	

	$('.friendsWithApp').remove();

	if (!cList.contacts.length) return;

	var lDivider = $("#friendsWithAppListDivider");

	for (var i=0; i<cList.contacts.length; i++){

		var listItem = $('<li data-theme="c" class="friendsWithApp"></li>').attr("id", "friendsWithAppListItem-" + cList.contacts[i].id);
	    var profPic = $('<img class="ui-li-thumb"></img>').attr('src', cList.contacts[i].imgPath);
	   	var name = $('<h1></h1>').text(cList.contacts[i].name);
	    //var rejectButton = $('<div data-role="button" data-inline="true" data-mini="true" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="g"><span class="ui-btn-corner-all"><span class="ui-btn-text">Delete</span></span></div>').attr('id', 'acceptButton-'+ cList.contacts[i].id);
	    var inviteButton = $('<div data-role="button" data-theme="f" data-inline="true" data-mini="true" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" ><span class=" ui-btn-corner-all"><span class="ui-btn-text">Send Invite</span></span></div>').attr('id', 'inviteButton-'+ cList.contacts[i].id);

		inviteButton.click({contact:cList.contacts[i]}, function(event) {
	    	contactToBeInvited = event.data.contact;
	    	$('#sendInviteName').text(contactToBeInvited.name);
			$( "#sendInviteAssure" ).popup( "open" );
	    });
	    
	    inviteButton.click({contact:cList.contacts[i]}, function(event) {
	    		addedFriends.addContact(event.data.contact);
	    		pendingContacts.removeContact(event.data.contact.id);
	    		$('#friendsWithAppListItem-'+event.data.contact.id).remove();
	    		updateRequestHeader();
	    });

	    listItem.append(profPic, name, inviteButton);

	    $('#FriendsWithAppList').append(listItem);
	     
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/* Empties and populates the addFriends page according to the
	 * phoneContacts list
	 */

//	$('.friendWithApp').remove();

 // 	var list = $('<ul data-role="listview" id="AddFriendsList" data-inset="true" data-divider-theme="a">');

	// var lDivider = $('<li id="addFriendsListDivider" data-role="list-divider" role="header">Add Friends With The App</li>');

	// list.append(lDivider);

	// $('#addFriendsContent').append(list);

	// if (!phoneContacts.contacts.length) {
	// 	var newlistItem = $('<li">');
	// 	var text = $('<h3 style="white-space:normal;padding-left:5px;padding-right:3px;">You have no more friends to share with. Click the invite tab to ask them to share this app with them.</h3>');
	// 	newlistItem.append(text);	
	// 	lDivider.after(newlistItem);

	// 	return;
	// }

	/*var list = $('#AddFriendsList');
	for (var i=0; i<cList.contacts.length; i++){

		var listItem = $('<li data-theme="c" data-icon="plus" class="friendWithApp"></li>').attr("id", "addFriendsListItem-" + cList.contacts[i].id);
	    var profPic = $('<img class="ui-li-thumb"></img>').attr('src', cList.contacts[i].imgPath);
	    var name = $('<h1></h1>').text(cList.contacts[i].name);
	    var inviteButton = $('<div data-role="button" data-theme="f" data-inline="true" data-mini="true" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" ><span class=" ui-btn-corner-all"><span class="ui-btn-text">Send Invite</span></span></div>').attr('id', 'rejectButton-'+ cList.contacts[i].id);

	    list.append(profPic, name, inviteButton);
		$('#AddFriendsList').append(listItem);

		inviteButton.click({contact:cList.contacts[i]}, function(event) {
	    	contactToBeInvited = event.data.contact;
	    	$('#sendInviteName').text(contactToBeInvited.name);
			$( "#sendInviteAssure" ).popup( "open" );
	    });
	}*/
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
			pendingContacts.removeContact(requestToBeDeleted.id);
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
			console.log($('#friendsWithAppListItem-'+contactToBeInvited.id));	
			$('#afriendsWithAppListItem-'+contactToBeInvited.id).remove();
			contactToBeInvited=null;
		}
		//updateAddFriendsHTML(phoneContacts);

		$( "#sendInviteAssure" ).popup( "close" );
	});
});

// $(document).bind('pagechange',function(e,d){
// 	if (d.toPage[0].id=='friends-add'){
// 		updateAddFriendsHTML(phoneContacts);
// 		updateRequestsHTML(pendingContacts);
// 	}
// });
