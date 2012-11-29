friendsAddedToGroup = new ContactList();
function saveGroup() {
	var groupName = $('#addGroup-title').val();	
	
	if (!groupName || friendsAddedToGroup.contacts.length < 2) {

		$('#notifyGroupRequirements').popup( "open" );

		return;
	}

	var newGroup = new Group(groupName, friendsAddedToGroup);

	addedFriends.addContact(newGroup);

	$.mobile.changePage('#friends-manage');

	clearPage();
}

// Used everytime we load the page
function updateGroupFriendsListHTML(cList) {

	friendsAddedToGroup = new ContactList();
	
	$('#addGroupContent > ul').remove()
	var list = $('<ul data-role="listview" data-divider-theme="a" data-inset="true">');
	var ulFriendsNode = $('<li data-role="list-divider" id="availableFriendsForGrouping">Friends</li>');

	list.append(ulFriendsNode);
	//$('.availableFriends').remove();

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

	    list.append(listItem);
	}
	
	$('#addGroupContent').append(list);
	list.listview();
}

function clearPage() {

	$('.availableFriends').removeClass('ui-btn-hover-f');
	$('.availableFriends').removeClass('ui-btn-up-f');
	$('.availableFriends').addClass('ui-btn-up-c');
	$('.availableFriends').addClass('ui-btn-hover-c');
	$('#addGroup-friendList').val('');
	$('#addGroup-title').val('');	

}

$(document).bind('pagechange',function(e,d){
	if (d.toPage[0].id=='friends-addGroup'){
		updateGroupFriendsListHTML(addedFriends);
	}
});

$(document).ready(function () {
	//set the handler for the continue button
	//updateGroupFriendsListHTML(addedFriends);
	$('#save-group-button').click(function (event){
		saveGroup();
	});

	$('#notifyGroupRequirements-okayButton').click(function (event) {
		$('#notifyGroupRequirements').popup( "close" );
	});
});
