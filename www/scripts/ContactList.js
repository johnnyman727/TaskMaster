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

/*Initialize the contact lists*/
phoneContacts = new ContactList();
addedContacts = new ContactList();

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
contactImgPaths[0] = "../assets/Friends/DannyMarz.jpg";
contactImgPaths[1] = "../assets/Friends/JasperManiatesSelvin.jpg";
contactImgPaths[2] = "../assets/Friends/KristineKammers.jpg";
contactImgPaths[3] = "../assets/Friends/MattSternke.jpg";
contactImgPaths[4] = "../assets/Friends/MichaelGallert.jpg";
contactImgPaths[5] = "../assets/Friends/MichelleKammers.jpg";
contactImgPaths[6] = "../assets/Friends/NicholasPjevach.jpg";
contactImgPaths[7] = "../assets/Friends/PeterLokken.jpg";
contactImgPaths[8] = "../assets/Friends/SeanOToole.jpg";


for (var i=0; i < contactNames.length; i++){
	phoneContacts.addContact(new Contact(contactNames[i], contactImgPaths[i]));
}

phoneContacts.sort();