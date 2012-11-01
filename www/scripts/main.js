/* Populate the HTML list */
function updateAddFriendsHTML(cList){

	var ulFriendsNode = $("#shareFriendsList");
	var liExample = $("#shareFriendsList > li:first").clone();
	
	for (var i=0; i<cList.contacts.length; i++){
		var friendLI = liExample.clone();
		//Make the theme consistant
		friendLI.removeClass('ui-btn-up-a ui-btn-up-b ui-btn-up-c ui-btn-up-d ui-btn-up-e ui-btn-up-f');
		friendLI.addClass('ui-btn-up-c');
		friendLI.attr('data-theme','c');
		
		//Add button functionality
		var friendButton = friendLI.find('a:first');
		
		// //Set the handler
		// friendButton.click({id:cList.contacts[i].id},toggleContactState);
		
		//Change the image and the name
		friendLI.find('img:first').attr('src',cList.contacts[i].imgPath);
		friendLI.find('span:first').html(cList.contacts[i].name.split(" ")[0]);
		
		//Assign the li an id
		friendLI.attr('id',cList.contacts[i].id);
		
		//Add friend node to the ul
		ulFriendsNode.append(friendLI);
	}
}
/*
function changeIframeSource(newIframeSource) {

	alert($('#pageContent iframe[visibility|="visible"]'));
	// $("#tasksList").style.visibility = hidden;
}

function findVisibleIframe() {
	iframes = $("#below-menu iframe");
	$.each(iframes, function(index, value) {
		if (value.style.visibility == 'visible') {
			return value;
		}
	});
}
*/
$(document).ready(function () {updateAddFriendsHTML(phoneContacts)});
