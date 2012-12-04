$(document).ready(function(){
	requestCount = $('<div class="requestCountCircle"><span class="requestCountText">3</span></div>');
	$('[data-role="header"]').has('.configureFriendsButton').append(requestCount);
	$(document).bind('pagechange',function(){
		if (pendingContacts.contacts.length){
			$('.requestCountText').text(pendingContacts.contacts.length);
			$('.requestCountCircle').show();
		}else{
			$('.requestCountCircle').hide();
		}
	});
});
