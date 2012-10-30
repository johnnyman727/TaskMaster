function Contact(name, imgPath){
	this.name = name;
	this.id = name.replace(/\s/g, "");
	this.imgPath = imgPath;
}
