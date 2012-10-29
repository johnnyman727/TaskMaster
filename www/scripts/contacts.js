function Contact(name, imgPath){
	this.name = name;
	this.id = name.replace(/\s/g, "");
	this.imgPath = imgPath;
}

function ContactList(){
	this.contacts = new Array();
	this.addContact = function(contact){
		this.contacts.push(contact);
	}
	this.removeContact = function(id){
		for (var i=0; i < this.contacts.length; i++){
			if (this.contacts[i].id == id){
				this.contacts.splice(i,1);
				break;
			}
		}
	}
	this.getContact = function(id){
		for (var i=0; i < this.contacts.length; i++){
			if (this.contacts[i].id == id){
				return this.contacts[i];
			}
		}
	}
	this.hasContact = function(id){
		for (var i=0; i < this.contacts.length; i++){
			if (this.contacts[i].id == id){
				return true;
			}
		}
		return false;
	}
	this.sort = function(){
		this.contacts.sort(function(a,b){
			if (a.name<b.name){return -1;}
			if (a.name==b.name){return 0;}
			if (a.name>b.name){return 1;}});
	}
}

phoneContacts = new ContactList();
addedContacts = new ContactList();

/*Initialize the contact lists*/
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


for (var i=0; i < contactNames.length; i++){
	phoneContacts.addContact(new Contact(contactNames[i], contactImgPaths[i]));
}

phoneContacts.sort();

function toggleContactState(id){
	friendElement = $('#'+id)
	if (addedContacts.hasContact(id)){
		//alert('removing contact'+id)
		//remove the contact
		addedContacts.removeContact(id);
		//change the style
		friendElement.removeClass('ui-btn-hover-f');
		friendElement.removeClass('ui-btn-up-f');
		friendElement.addClass('ui-btn-up-c');
		friendElement.removeClass('ui-btn-hover-c');
		friendElement.attr('data-theme','c');
	}else{
		//alert('adding contact'+id)
		//add the contact
		addedContacts.addContact(phoneContacts.getContact(id));
		//change the style
		friendElement.removeClass('ui-btn-hover-c');
		friendElement.removeClass('ui-btn-up-c');
		friendElement.addClass('ui-btn-hover-c');
		friendElement.addClass('ui-btn-up-f');
		
		friendElement.attr('data-theme','f');
	}
	//alert(addedContacts.contacts.length+' friends')
	/*var currentFriends = ''
	/for (var i=0;i<addedContacts.length;i++){
		currentFriends = currentFriends + addedContacts.contacts[i].name + '\n'
	}
	
	alert('Current Friends:\n'+currentFriends)*/
}

function updateAddFriendsHTML(cList){
	var ulFriendsNode = $("#addFriendsList");
	var liExample = $("#addFriendsList > li:first").clone()
	ulFriendsNode.empty();
	
	for (var i=0; i<cList.contacts.length; i++){
		var friendLI = liExample.clone();
		//Make the theme consistant
		friendLI.removeClass('ui-btn-up-a ui-btn-up-b ui-btn-up-c ui-btn-up-d ui-btn-up-e ui-btn-up-f');
		friendLI.addClass('ui-btn-up-c');
		friendLI.attr('data-theme','c');
		
		//Add button functionality
		var friendButton = friendLI.find('a:first');
		
		//Set the onClick handler
		function onClick(event){
			toggleContactState(event.data.contact.id);
		}
		friendButton.click({contact:cList.contacts[i]},onClick);
		
		//Change the image and the name
		friendLI.find('img:first').attr('src',cList.contacts[i].imgPath);
		friendLI.find('h1:first').html(cList.contacts[i].name);
		
		//Assign the li an id
		friendLI.attr('id',cList.contacts[i].id);
		
		//Add friend node to the ul
		ulFriendsNode.append(friendLI);
	}
}

$(document).ready(function () {updateAddFriendsHTML(phoneContacts)});
