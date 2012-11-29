/*
 * addFriendsPage.js
 * 
 * Manages actions that occur on the Add Friends page
 * 
 */

function updateAddFriendsHTML(cList){
	/* Empties and populates the addFriends page according to the
	 * phoneContacts list
	 */
	 
	var ulFriendsNode = $("#addFriendsList");

	if (!cList.contacts.length) {
		ulFriendsNode.hide();
		return;
	} else {
		ulFriendsNode.show();
	}

	$('.friendWithApp').remove();

	for (var i=0; i<cList.contacts.length; i++){

		var listItem = $('<li data-theme="c" data-icon="plus" class="friendWithApp"></li>').attr("id", "addFriendsListItem-" + cList.contacts[i].id);
	    var profPic = $('<img class="ui-li-thumb"></img>').attr('src', cList.contacts[i].imgPath);
	    var name = $('<h1></h1>').text(cList.contacts[i].name);
	    var acceptButton = $('<div data-role="button" data-theme="b" data-inline="true" data-mini="true" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" ><span class=" ui-btn-corner-all"><span class="ui-btn-text">Send Invite</span></span></div>').attr('id', 'rejectButton-'+ cList.contacts[i].id);

	    listItem.append(profPic, name, acceptButton);
		ulFriendsNode.after(listItem);

		acceptButton.click(function(event) {
	    	var parts = this.id.split('-');
	    	var id = parts[1];
	    	var li = $('#addFriendsListItem-' + id);
	    	li.remove();
	    	phoneContacts.removeContact(id);
	    });
	}
}

function updateRequestsHTML(cList) {

	var ulFriendsNode = $("#requestsList");

	if (!cList.contacts.length) {
		ulFriendsNode.hide();
		return;
	} else {
		ulFriendsNode.show();
	}

	$('.pendingRequest').remove();

	for (var i=0; i<cList.contacts.length; i++){

		var listItem = $('<li data-theme="c" class="pendingRequest"></li>').attr("id", "pendingRequestListItem-" + cList.contacts[i].id);
	    var profPic = $('<img class="ui-li-thumb"></img>').attr('src', cList.contacts[i].imgPath);
	   	var name = $('<h1></h1>').text(cList.contacts[i].name);
	    var rejectButton = $('<div data-role="button" data-inline="true" data-mini="true" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="c"><span class="ui-btn-corner-all"><span class="ui-btn-text">Delete</span></span></div>').attr('id', 'acceptButton-'+ cList.contacts[i].id);
	    var acceptButton = $('<div data-role="button" data-theme="b" data-inline="true" data-mini="true" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" ><span class=" ui-btn-corner-all"><span class="ui-btn-text">Accept</span></span></div>').attr('id', 'rejectButton-'+ cList.contacts[i].id);

	    rejectButton.click(function(event) {
	    	var parts = this.id.split('-');
	    	var id = parts[1];
	    	var li = $('#pendingRequestListItem-' + id);
	    	li.remove();
	    	pendingContacts.removeContact(id);

	    });

	   	acceptButton.click(function(event) {
	    	var parts = this.id.split('-');
	    	var id = parts[1];
	    	var li = $('#pendingRequestListItem-' + id);
	    	li.remove();
	    	addedFriends.addContact(pendingContacts.getContact(id));
	    	pendingContacts.removeContact(id);
	    });

	    listItem.append(profPic, name, acceptButton, rejectButton);

	    ulFriendsNode.after(listItem);   
	}
}

$(document).ready(function () {
	updateAddFriendsHTML(phoneContacts);
	updateRequestsHTML(pendingContacts);
});

