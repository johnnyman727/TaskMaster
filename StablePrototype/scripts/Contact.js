/*
 * Contact.js
 * 
 * Creates Contact objects
 * 	object variables:
 * 		-name (string): a contact's name
 * 		-id (string): a unique id for the contact
 * 		-imgPath (string): a file path to the contact's profile image
 * 		-taskList (TaskList object): a reference to the contact's task list
 * 
 * 	object methods:
 * 		-none
 * 
 * 	class methods:
 * 		-nameToId (string): takes a name and strips the whitespace so
 * that it can be used as an id. This allows the Contact object to have
 * the same id as the HTML element.
 */

function Contact(name, imgPath){
	this.name = name;
	this.id = Contact.nameToId(name);
	this.id = this.id.replace("\'", "");
	this.imgPath = imgPath;
	this.taskList = new TaskList();
}

Contact.nameToId = function(name){
	return name.replace(/\s/g, "");
}
