/*
 * TaskList.js
 * 
 * Creates task list objects
 * 	object variables:
 * 		-tasks (Array of Task objects) [no two tasks may share an id]
 * 
 * 	object methods:
 * 		-addTask(Task object): adds a task to the task list
 * 		-removeTask(string): removes the task with the matching id
 * 		-getTask(string): returns a reference to the task with the matching id
 * 		-hasTask(string): returns a boolean corresponding to the existance of a task in a list
 * 		*-sort(): FIXME: this still needs to be implemented
 * 
 */
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
	
	this.replaceTask = function(id,newTask){
		for (var i=0; i < this.tasks.length; i++){
			if (this.tasks[i].id == id){
				this.tasks[i] = newTask;
			}
		}
	}
	
	this.sort = function(method){
		if (method=='location'){
			console.log('sorting by location');
			this.tasks.sort(function(a,b){
				return distance(myLocation_lat,myLocation_lng,a.lat,a.lng)-distance(myLocation_lat,myLocation_lng,b.lat,b.lng);
			});
		}else if (method=='priority'){
			console.log('sorting by priority');
			this.tasks.sort(function(a,b){
				console.log(a.priority);
				console.log(b.priority);
				if (a.priority==b.priority){console.log(0);return 0;}
				if (a.priority=='high'){console.log(-1);return -1;}
				if (b.priority=='high'){console.log(1);return 1;}
				if (a.priority=='medium'){console.log(-1);return -1;}
				if (b.priority=='medium'){console.log(1);return 1;}
			});
		}
	}
	//FIXME: include functionality for sorting tasks (alphabetically, by date, by urgency)
}
