contactToBeInvited = null;
	
function updateInviteFriendsListHTML(cList) {

	var list = $("#inviteFriendsList");

	$('.inviteFriends').remove();
	
	
	var noFriendsWithoutAppMessage = $('<li data-theme="c" class="pendingRequest" id="noFriendsWithoutAppMessage">All of your friends have the app!!</li>');

    $('#inviteFriendsList').append(noFriendsWithoutAppMessage);

	for (var i=0; i<cList.contacts.length; i++){

		if (cList.contacts[i] == me){
			continue;
		}

		var listItem = $('<li data-theme="c" class="inviteFriends"></li>').attr("id", "inviteFriendListItem-" + cList.contacts[i].id);
	    var profPic = $('<img class="ui-li-thumb"></img>').attr('src', cList.contacts[i].imgPath);
	   	var name = $('<h1></h1>').text(cList.contacts[i].name);
	   	var inviteButton = $('<div data-role="button" data-inline="true" data-mini="true" data-corners="true" data-shadow="true" data-wrapperels="span" data-theme="f" ><span class="ui-btn-corner-all inviteFriendButton"><span class="ui-btn-text">Invite</span></span></div>');
	   	inviteButton.attr('id','inviteButton-'+cList.contacts[i].id);

	    listItem.append(profPic, name, inviteButton);

	     inviteButton.click({contact:cList.contacts[i]}, function(event) {
	     	contactToBeInvited = event.data.contact;	
	    	$('#inviteName').text(contactToBeInvited.name);
		 	$( "#inviteNotification" ).popup( "open" );
		 });
	    list.append(listItem);    
	}
	updateNoFriendsWithoutAppMessage();
}

function updateNoFriendsWithoutAppMessage(){
	if (!noAppPhoneContacts.contacts.length){
		$('#noFriendsWithoutAppMessage').show();
	}else{
		$('#noFriendsWithoutAppMessage').hide();
	}
}

$(document).ready(function(){
	updateInviteFriendsListHTML(noAppPhoneContacts);

	$( "#inviteFriend-cancelButton" ).bind( "click", function(event, ui) {
			$( "#inviteNotification" ).popup( "close" );
			contactToBeInvited = null;
	});
	$( "#inviteFriend-inviteButton" ).bind( "click", function(event, ui) {
		if (contactToBeInvited){
			noAppPhoneContacts.removeContact(contactToBeInvited.id);
			//phoneContacts.addContact(contactToBeDeleted);		
			//add this to a temporary list in the future
			$('#inviteFriendListItem-'+contactToBeInvited.id).remove();
			contactToBeInvited=null;
			updateNoFriendsWithoutAppMessage();
		}

		$( "#deleteNotification" ).popup( "close" );
	});
});
