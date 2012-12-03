/*
 * Task.js
 * 
 * Creates Task objects
 * 	object variables:
 * 		-title (string): the title to be displayed to the user
 * 		-owner (Contact object): a reference to the Contact object that created the task
 * 		-brand (string): *optional brand if applicable
 * 		-id (string): a unique id for the task
 * 		-lat (double): *optional latitude of the task location
 * 		-lng (double): *optional longitude of the task location
 * 		-location (string): *optional name of the task location
 * 		-notes (string): *optional notes for the task
 * 		-maxPrice (double): *optional maximum price of the task
 * 		-priority (string): 'low'(default), 'medium', or 'high'
 * 		-sharedWith (ContactList object): a ContactList containing all of the contacts that the item is shared with
 * 
 * 
 * 	object methods:
 * 		-setLocation(string, double, double): sets the name, latitude and longitude of the task location
 * 		-setMaxPrice(double): sets the maxPrice of the item
 * 		-setBrand(string): sets the brand of the item
 * 		-setNotes(string): sets the notes of the item
 * 		-shareWith(Contact object): shares the item with the specified contact
 * 		-getSharedContactNames(): returns the list of names of contacts that the task was shared with
 * 		-setPriority(string): sets the priority of an item, triggers an alert if the priority was invalid
 */
function Task(title,owner) {
	this.title = title;
	this.owner = owner;
	this.brand = null;
	this.id = owner.id + title.replace(/\s/g, "");
	this.lat = null;
	this.lng = null;
	this.location = null;
	this.notes = null;
	this.maxPrice = null;
	this.priority = 'low';
	this.sharedWith = new ContactList(); 	
	
	
	this.setLocation = function(location,lat,lng){
		this.location = location;
		this.lat = lat;
		this.lng = lng;
	}
	
	this.setMaxPrice = function(maxPrice){
		this.maxPrice = maxPrice;
	}
	
	this.setBrand = function(brand){
		this.brand = brand;
	}
	
	this.setNotes = function(notes){
		this.notes = notes;
	}
	
	this.shareWith = function(contact){
		this.sharedWith.addContact(contact);
	}
	
	this.getSharedContactNames = function(){
		return this.sharedWith.getContactNames();
	}
	
	this.setPriority = function(priority){
		priority = priority.toLowerCase();
		if ((priority != 'low') && (priority != 'medium') && (priority != 'high')){
			alert('invalid priority: '+priority);
		}
		this.priority=priority;
	}

	this.lat_long_string = function() {

		if (this.lat && this.lng) {
			return this.lat.toString() + "," + this.lng.toString();

		} else {
			console.log("We've got some null buggers");
		}
	}
}
