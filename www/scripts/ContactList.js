/*
 * ContactList.js
 * 
 * Creates contact list objects
 * 	object variables:
 * 		-contacts (Array of Contact objects) [no two contacts may share an id]
 * 
 * 	object methods:
 * 		-addContact(Contact object): adds a contact to the contact list
 * 		-removeContact(string): removes the contact with the matching id
 * 		-getContact(string): returns a reference to the contact with the matching id
 * 		-hasContact(string): returns a boolean corresponding to the existance of a contact in a list
 * 		-getContactNames(): returns a list of the contact names
 * 		-sort(): sorts the contacts alphabetically, putting any contact with the name "Me"
 * 		-isEmpty(): returns a boolean indicating if the contact list is empty
 * 
 */


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
	this.getContactNames = function(){
		names = [];
		console.log(this.contacts.length)
		console.log('sharedWith contacts: '+this.contacts)
		for (var i=0; i<this.contacts.length; i++){
			names.push(this.contacts[i].name);
		}
		return names;
	}
	this.sort = function(){
		this.contacts.sort(function(a,b){
			if (a.name=='Me'){return -1;}
			if (b.name=='Me'){return 1;}
			if (a.name<b.name){return -1;}
			if (a.name==b.name){return 0;}
			if (a.name>b.name){return 1;}});
	}
	this.isEmpty = function(){
		return this.contacts.length == 0;
	}
}
