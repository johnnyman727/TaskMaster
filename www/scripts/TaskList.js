function TaskList(){
	this.tasks = [];
	
	this.addTask = function (task){
		this.tasks.push(task)
	}
	
	this.removeTask = function (id){
		for (var i=0; i<this.tasks.length; i++){
			if (id == this.tasks[i].id){
				this.tasks.splice(i,1);
				break;
			}
		}
	}
	
	this.getTask = function(id){
		for (var i=0; i < this.tasks.length; i++){
			if (this.tasks[i].id == id){
				return this.tasks[i];
			}
		}
	}
	
	this.hasTask = function(id){
		for (var i=0; i < this.tasks.length; i++){
			if (this.tasks[i].id == id){
				return true;
			}
		}
		return false;
	}
	
	//FIXME: include functionality for sorting tasks (alphabetically, by date, by urgency)
}
