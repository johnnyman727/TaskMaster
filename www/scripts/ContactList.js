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
			if (a.name<b.name){return -1;}
			if (a.name==b.name){return 0;}
			if (a.name>b.name){return 1;}});
	}
}

/*Initialize the contact lists*/
phoneContacts = new ContactList();
addedContacts = new ContactList();

var contactNames = [];
contactNames[0] = "Danny Marz";
contactNames[1] = "Jasper Maniates-Selvin";
contactNames[2] = "Kristine Kammers";
contactNames[3] = "Matt Sternke";
contactNames[4] = "Michael Gallert";
contactNames[5] = "Michelle Kammers";
contactNames[6] = "Nicholas Pjevach";
contactNames[7] = "Peter Lokken";
contactNames[8] = "Sean O\'Toole";
var contactImgPaths = [];
contactImgPaths[0] = "../assets/Friends/DannyMarz.jpg";
contactImgPaths[1] = "../assets/Friends/JasperManiatesSelvin.jpg";
contactImgPaths[2] = "../assets/Friends/KristineKammers.jpg";
contactImgPaths[3] = "../assets/Friends/MattSternke.jpg";
contactImgPaths[4] = "../assets/Friends/MichaelGallert.jpg";
contactImgPaths[5] = "../assets/Friends/MichelleKammers.jpg";
contactImgPaths[6] = "../assets/Friends/NicholasPjevach.jpg";
contactImgPaths[7] = "../assets/Friends/PeterLokken.jpg";
contactImgPaths[8] = "../assets/Friends/SeanOToole.jpg";

/*Initialize task lists*/
var tasksLists = [];

taskList[0] = newTaskList();

task_0_0 = new Task('Shampoo',contactNames[0]);
task_0_0.setBrand('Dove');
task_0_0.setLocation ( 'CVS', 42.29285127750455, 71.23519648439037);
task_0_0.setMaxPrice ('$7.00');
task_0_0.setSharedWith ('You, Matt Sternke');
task_0.0.setPriority ('Medium');
taskList[0].addTask(task_0_0);

task_0_1 = new Task('Pick Up Pizza',contactNames[0]);
task_0_1.setLocation ( 'Tonys');
task_0_1.setMaxPrice ('$23.79');
task_0_1.setPriority ('High');
task_0_1.setNotes ('Under the name Marz. 3 Pizzas. Bring to my house for poker night.');
taskList[0].addTask(task_0_1);

taskList[1] = newTaskList();

task_1_0 = new Task('Gummy Vitamins',contactNames[1]);
task_1_0.setBrand('Store Brand');
task_1_0.setLocation ( 'Target', 42.27285127750455, 71.23019648439037);
task_1_0.setMaxPrice ('$10.00');
task_1_0.setPriority ('Low');
task_1_0.setNotes ('Get which ever size is the cheapest per oz.');
taskList[1].addTask(task_1_0);

taskList[2] = newTaskList();

taskList[3] = newTaskList();

task_3_0 = new Task('Advil',contactNames[3]);
task_3_0.setBrand('Advil');
task_3_0.setLocation ( 'CVS', 42.29285127750455, 71.23519648439037);
task_3_0.setPriority ('High');
task_3_0.setNotes ('Liqui-gels');
taskList[3].addTask(task_3_0);

task_3_1 = new Task('Dog Food',contactNames[3]);
task_3_1.setBrand('Blue Buffalo');
task_3_1.setLocation ( 'PetSmart', 42.285127750455, 71.24319648439037);
task_3_1.setMaxPrice ('$25.00');
task_3_1.setPriority ('Low');
taskList[3].addTask(task_3_1);

taskList[4] = newTaskList();

task_4_0 = new Task('Perennials',contactNames[4]);
task_4_0.setLocation ( 'Home Depot', 42.2935127750455, 71.254319648439037);
task_4_0.setMaxPrice ('$10');
task_4_0.setPriority ('Low');
task_4_0.setNotes ('I am ok with most types. I prefer red ones :)');
taskList[4].addTask(task_4_0);

taskList[5] = newTaskList();

taskList[6] = newTaskList();

task_6_0 = new Task('Milk and Oil',contactNames[6]);
task_6_0.setLocation ( 'Shaws', 42.2934, 71.2456);
task_6_0.setMaxPrice ('$10');
task_6_0.setPriority ('High');
task_6_0.setNotes ('Skim milk, Olive Oil');
taskList[6].addTask(task_6_0);

taskList[7] = newTaskList();

taskList[8] = newTaskList();

task_8_0 = new Task('Dry Cleaning',contactNames[8]);
task_8_0.setLocation ( 'Lucky Dry Cleaning', 42.28734, 71.242256);
task_8_0.setPriority ('Medium');
task_8_0.setNotes ('Already paid for. It is 3 shirts and 1 pair of pants');
taskList[8].addTask(task_8_0);


for (var i=0; i < contactNames.length; i++){//FIXME: add the appropriate task list to each contact
	phoneContacts.addContact(new Contact(contactNames[i], contactImgPaths[i]));
}

phoneContacts.sort();
