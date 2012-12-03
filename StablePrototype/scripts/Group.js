function Group(name, contactList) {
	this.name = name;
	this.contactList = contactList;
	this.imgPath = "../assets/group.png";
	this.id = Group.nameToId(name);
}

Group.nameToId = function(name){
	name = name.replace("\'", "");
	return name.replace(/\s/g, "");
}
