function Contact(name, imgPath){
	this.name = name;
	this.imgPath = imgPath;
}

function ContactList(){
	this.contacts = new Array();
	this.addContact = function(contact){
		this.contacts.push(contact);
	}
	this.removeContact = function(name){
		for (var i=0; i < this.contacts.length; i++){
			if (this.contacts[i].name == name){
			}
		}
	}
}

function updateAddFriendsHTML(cList){
	ulFriendsNode = $("#addFriendsList");
	liExample = $("#addFriendsList > li:first").clone()
	ulFriendsNode.empty();
	
	for (var i=0; i<cList.contacts.length; i++){
		friendLI = liExample.clone();
		//Make the theme consistant
		friendLI.removeClass('ui-btn-up-a ui-btn-up-b ui-btn-up-c ui-btn-up-d ui-btn-up-e ui-btn-up-f');
		friendLI.addClass('ui-btn-up-c');
		friendLI.attr('data-theme','c');
		
		//Change the image and the name
		friendLI.find('img:first').attr('src',cList.contacts[i].imgPath);
		friendLI.find('h1:first').html(cList.contacts[i].name);
		
		
		//friendImg = friendLI.find('img:first');
		//friendImg.attr('src',cList.contacts[i].imgPath)
		//$(ulFriendsNode).append(friendItem);
		
		//Add friend node to the ul
		ulFriendsNode.append(friendLI);
	}
}

/*Initialize the contacts*/
var contactNames = [];
contactNames[0] = "Danny Marz";
contactNames[1] = "Jasper Maniates-Selvin";
contactNames[2] = "Kristine Kammers";
contactNames[3] = "Matt Sternke";
contactNames[4] = "Michael Gallert";
contactNames[5] = "Michelle Kammers";
contactNames[6] = "Nicholas Pjevach";
contactNames[7] = "Peter Lokken";
contactNames[8] = "Sean O\'Toole";

var contactImgPaths = [];
contactImgPaths[0] = "./assets/Friends/DannyMarz.jpg";
contactImgPaths[1] = "./assets/Friends/JasperManiatesSelvin.jpg";
contactImgPaths[2] = "./assets/Friends/KristineKammers.jpg";
contactImgPaths[3] = "./assets/Friends/MattSternke.jpg";
contactImgPaths[4] = "./assets/Friends/MichaelGallert.jpg";
contactImgPaths[5] = "./assets/Friends/MichelleKammers.jpg";
contactImgPaths[6] = "./assets/Friends/NicholasPjevach.jpg";
contactImgPaths[7] = "./assets/Friends/PeterLokken.jpg";
contactImgPaths[8] = "./assets/Friends/SeanOToole.jpg";

contacts = new ContactList();

for (var i=0; i < contactNames.length; i++){
	contacts.addContact(new Contact(contactNames[i], contactImgPaths[i]));
}

$(document).ready(function () {updateAddFriendsHTML(contacts)});
