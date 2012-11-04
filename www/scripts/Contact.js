function Contact(name, imgPath, taskList){
	this.name = name;
	this.id = name.replace(/\s/g, "");
	this.id = this.id.replace("\'", "");
	this.imgPath = imgPath;
	this.taskList = taskList;
}
