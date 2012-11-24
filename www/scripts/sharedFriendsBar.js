/* Toggle the state of the element */
function toggleSelectedContact(id){
	var fullImgPath = addedContacts.getContact(id).imgPath.split('/');
	var imgFilename = fullImgPath.pop().split('.');
	
	if (selectedContacts.hasContact(id)){
		console.log('deselecting contact')
		console.log(selectedContacts.getContactNames())
		//remove the contact
		selectedContacts.removeContact(id);
		//change the style
		imgFilename[0] += '_Unselected';
	}else{
		console.log('selecting contact')
		//add the contact
		selectedContacts.addContact(addedContacts.getContact(id));
		//change the style
		imgFilename[0] += '_Selected';
	}
	imgFilename = imgFilename.join('.');
	fullImgPath.push(imgFilename);
	fullImgPath = fullImgPath.join('/');
	
	$('.bar-'+id+' > img').attr('src',fullImgPath);
}

/* Populate the HTML list */
function updateSharedFriendsHTML(cList){
	cList.sort()
	
	//Empty the list
	ulFriendsNode = $('.shareFriendsList')
	ulFriendsNode.empty()
	
	
	//Re-Add each element
	for (var i=0; i<cList.contacts.length; i++){
		//create and setup the li element
		var friendLI = $('<li>');
		friendLI.attr('class','bar-'+cList.contacts[i].id)
		
		//create the anchor element
		
		//image
		var imgPathItems = cList.contacts[i].imgPath.split('/');
		var imgFilenameItems = imgPathItems[imgPathItems.length-1].split('.');
		var imgFilename = imgFilenameItems[0];
		var imgExtension = imgFilenameItems[1];
		if (selectedContacts.hasContact(cList.contacts[i].id)){
			imgFilename += '_Selected.' + imgExtension;
		}else{
			imgFilename += '_Unselected.' + imgExtension;
		}
		imgPathItems[imgPathItems.length-1] = imgFilename;
		var finalImgPath = imgPathItems.join('/')
		var friendImg = $('<img>');
		friendImg.attr('src',finalImgPath);
		
		friendLI.append(friendImg);
		
		//handler
		friendLI.click({id:cList.contacts[i].id},function(e){
			toggleSelectedContact(e.data.id)
			updateContentHTML()
		});
		
		//add the li element to the DOM
		ulFriendsNode.append(friendLI);
	}
}
