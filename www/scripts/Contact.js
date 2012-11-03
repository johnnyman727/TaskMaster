function Contact(name, imgPath, taskList){
	this.name = name;
	this.id = name.replace(/\s/g, "");
	this.imgPath = imgPath;
	this.taskList = taskList;
}
