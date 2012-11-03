function Task(title,owner) {
	this.title = title;
	this.owner = owner;
	this.brand = null;
	this.id = owner.id + title.replace(/\s/g, "");
	this.lat = null;
	this.lng = null;
	this.location = null;
	this.notes = null;
	this.active = true;
	this.maxPrice = null;
	this.priority = 'low';
	this.sharedwith = null; 
	
	
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
	
	this.setSharedWith = function(sharedWith){
		this.sharedWith = sharedWith;
	}
	
	
	this.setPriority = function(priority){
		if ((priority.toLowerCase() != 'low') && (priority.toLowerCase() != 'medium') && (priority.toLowerCase() != 'high')){
			alert('bad priority: '+priority.toLowerCase());
		}
		this.priority=priority.toLowerCase();
	}
}


//sampleTask = new Task('sampleTask',new Contact('sampleContact','sampleImg'))
//sampleTask.title
//sampleTask.setBrand('Dove')
//sampleTask.brand
