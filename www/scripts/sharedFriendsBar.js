/* Toggle the state of the element */
function toggleSelectedContact(id){
	$('.user_wrapper' + id).toggleClass('down');
    $('.img_shade' + id).toggleClass('down');
    $('.name_background' + id).toggleClass('down');

	if (selectedContacts.hasContact(id)){
		//remove the contact
		selectedContacts.removeContact(id);
		//change the style
	}else{
		//add the contact
		selectedContacts.addContact(addedFriends.getContact(id));
	}
}


/* Populate the HTML list */
function updateSharedFriendsHTML(cList){
	cList.sort()
	
	//Empty the list
	ulFriendsNode = $('.shareFriendsList')
	ulFriendsNode.empty()

	//Re-Add each element
	for (var i=0; i<cList.contacts.length; i++){
		id = cList.contacts[i].id;
		
		var new_user = $('<div></div>').attr('class', 'user_wrapper' + id + ' user');

		var prof_pic = $('<img class="prof_pic"></img>').attr('src', cList.contacts[i].imgPath);

		var img_shade = $('<div></div>').attr('class', 'img_shade img_shade' + id);

		var user_name = $('<div class="user_name"></div>');

		var name_background = $('<div></div>').attr('class', 'name_background name_background' + id);

		var name_text = $('<div class="name_text"></div>').text(cList.contacts[i].name.split(' ')[0]);

		if (selectedContacts.hasContact(cList.contacts[i].id)){
			new_user.toggleClass('down');
			img_shade.toggleClass('down');
			name_background.toggleClass('down');
		}

		user_name.append(name_background, name_text);

		new_user.append(prof_pic, img_shade, user_name);
		
		//handler
		new_user.click({id:cList.contacts[i].id},function(e){
			toggleSelectedContact(e.data.id)
			updateContentHTML()
		});
		
		//add the li element to the DOM
		ulFriendsNode.append(new_user);
	}
}

$(document).ready(function () {
	updateSharedFriendsHTML(addedFriends);

	$('.friends-back').click(function(event) {
		updateSharedFriendsHTML(addedFriends);
	});
});
