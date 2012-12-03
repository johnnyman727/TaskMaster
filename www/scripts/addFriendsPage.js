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
	
	
	var noRequestsMessage = $('<li data-theme="c" class="pendingRequest" id="noRequestMessage">You Have No Pending Requests</li>');

    $('#RequestsList').append(noRequestsMessage);
    
    //if (cList.contacts.length){
	//	noRequestMessage.hide();
	//}
	
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
	updateRequestHeader();
}

 function updateRequestHeader(){

	if (!pendingContacts.contacts.length) {
		$('#noRequestMessage').show();
	} else {
		$('#noRequestMessage').hide();
	}
 }


function updateAddFriendsHTML(cList){
	
	$('.friendsWithApp').remove();

	var noFriendsWithAppMessage = $('<li data-theme="c" class="friendsWithApp" id="noFriendsWithAppMessage"></li>');
	
   	var message = $('<h1>None of your friends have the app</h1>')
    
    var noFriendsInviteLink = $('<div id="noFriendsInviteLink" data-role="button" data-theme="f" data-inline="true" data-mini="true" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" ><span class=" ui-btn-corner-all"><span class="ui-btn-text">Invite Some Friends</span></span></div>')
    
    noFriendsInviteLink.click(function (){
		$.mobile.changePage('#friends-invite');
	});
	
	noFriendsWithAppMessage.append(message, noFriendsInviteLink);

    $('#FriendsWithAppList').append(noFriendsWithAppMessage);

	for (var i=0; i<cList.contacts.length; i++){

		var listItem = $('<li data-theme="c" class="friendsWithApp"></li>').attr("id", "friendsWithAppListItem-" + cList.contacts[i].id);
	    var profPic = $('<img class="ui-li-thumb"></img>').attr('src', cList.contacts[i].imgPath);
	   	var name = $('<h1></h1>').text(cList.contacts[i].name);
	    var inviteButton = $('<div data-role="button" data-theme="f" data-inline="true" data-mini="true" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" ><span class=" ui-btn-corner-all"><span class="ui-btn-text">Send Invite</span></span></div>').attr('id', 'inviteButton-'+ cList.contacts[i].id);

		inviteButton.click({contact:cList.contacts[i]}, function(event) {
	    	contactToBeInvited = event.data.contact;
	    	$('#sendInviteName').text(contactToBeInvited.name);
			$( "#sendInviteAssure" ).popup( "open" );
	    });
	    

	    listItem.append(profPic, name, inviteButton);

	    $('#FriendsWithAppList').append(listItem);
	     
	}
	updateNoFriendsWithAppMessage();
}

function updateNoFriendsWithAppMessage(){
	if (!phoneContacts.contacts.length) {
		$('#noFriendsWithAppMessage').show();
	} else {
		$('#noFriendsWithAppMessage').hide();
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
			$('#friendsWithAppListItem-'+contactToBeInvited.id).remove();
			updateNoFriendsWithAppMessage();
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
// 	}
// });
