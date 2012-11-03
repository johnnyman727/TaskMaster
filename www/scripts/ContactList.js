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
			if (a.name=='Me'){return -1;}
			if (b.name=='Me'){return 1;}
			if (a.name<b.name){return -1;}
			if (a.name==b.name){return 0;}
			if (a.name>b.name){return 1;}});
	}
}
