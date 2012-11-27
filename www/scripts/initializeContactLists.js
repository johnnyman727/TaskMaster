/*
 * initializeContactLists.js
 * 
 * Initializes the major contact lists:
 * 	-phoneContacts: any contacts in the phone that haven't been added to the app
 * 	-addedContacts: any contacts that have been added to the phone
 * 	-selectedContacts: any contacts that are currently selected
 * 
 * Populates phoneContacts and populates each contact with a task list
 * 
 */


phoneContacts = new ContactList();
addedContacts = new ContactList();
selectedContacts = new ContactList();
//add myself to the list
me = new Contact("Me","../assets/Friends/JonMcKay.png");

addedContacts.addContact(me);
selectedContacts.addContact(me);

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
contactImgPaths[0] = "../assets/Friends/DannyMarz.png";
contactImgPaths[1] = "../assets/Friends/JasperManiatesSelvin.png";
contactImgPaths[2] = "../assets/Friends/KristineKammers.png";
contactImgPaths[3] = "../assets/Friends/MattSternke.png";
contactImgPaths[4] = "../assets/Friends/MichaelGallert.png";
contactImgPaths[5] = "../assets/Friends/MichelleKammers.png";
contactImgPaths[6] = "../assets/Friends/NicholasPjevach.png";
contactImgPaths[7] = "../assets/Friends/PeterLokken.png";
contactImgPaths[8] = "../assets/Friends/SeanOToole.png";

for (var i=0; i < contactNames.length; i++){
	phoneContacts.addContact(new Contact(contactNames[i], contactImgPaths[i]));
}

/*Initialize task lists*/
task_0_0 = new Task('Shampoo',phoneContacts.contacts[0]);
task_0_0.setBrand('Dove');
task_0_0.setLocation ( 'CVS', 42.29285127750455, 71.23519648439037);
task_0_0.setMaxPrice ('$7.00');
task_0_0.setPriority ('Medium');
phoneContacts.contacts[0].taskList.addTask(task_0_0);

task_0_1 = new Task('Pick Up Pizza',phoneContacts.contacts[0]);
task_0_1.setLocation ( 'Tonys');
task_0_1.setMaxPrice ('$23.79');
task_0_1.setPriority ('High');
task_0_1.setNotes ('Under the name Marz. 3 Pizzas. Bring to my house for poker night.');
phoneContacts.contacts[0].taskList.addTask(task_0_1);


task_1_0 = new Task('Gummy Vitamins',phoneContacts.contacts[1]);
task_1_0.setBrand('Store Brand');
task_1_0.setLocation ( 'Target', 42.27285127750455, 71.23019648439037);
task_1_0.setMaxPrice ('$10.00');
task_1_0.setPriority ('Low');
task_1_0.setNotes ('Get which ever size is the cheapest per oz.');
phoneContacts.contacts[1].taskList.addTask(task_1_0);


task_3_0 = new Task('Advil',phoneContacts.contacts[3]);
task_3_0.setBrand('Advil');
task_3_0.setLocation ( 'CVS', 42.29285127750455, 71.23519648439037);
task_3_0.setPriority ('High');
task_3_0.setNotes ('Liqui-gels');
phoneContacts.contacts[3].taskList.addTask(task_3_0);

task_3_1 = new Task('Dog Food',phoneContacts.contacts[3]);
task_3_1.setBrand('Blue Buffalo');
task_3_1.setLocation ( 'PetSmart', 42.285127750455, 71.24319648439037);
task_3_1.setMaxPrice ('$25.00');
task_3_1.setPriority ('Low');
phoneContacts.contacts[3].taskList.addTask(task_3_1);


task_4_0 = new Task('Perennials',phoneContacts.contacts[4]);
task_4_0.setLocation ( 'Home Depot', 42.2935127750455, 71.254319648439037);
task_4_0.setMaxPrice ('$10');
task_4_0.setPriority ('Low');
task_4_0.setNotes ('I am ok with most types. I prefer red ones :)');
phoneContacts.contacts[4].taskList.addTask(task_4_0);


task_6_0 = new Task('Milk and Oil',phoneContacts.contacts[6]);
task_6_0.setLocation ( 'Shaws', 42.2934, 71.2456);
task_6_0.setMaxPrice ('$10');
task_6_0.setPriority ('High');
task_6_0.setNotes ('Skim milk, Olive Oil');
phoneContacts.contacts[6].taskList.addTask(task_6_0);


task_8_0 = new Task('Dry Cleaning',phoneContacts.contacts[8]);
task_8_0.setLocation ( 'Lucky Dry Cleaning', 42.28734, 71.242256);
task_8_0.setPriority ('Medium');
task_8_0.setNotes ('Already paid for. It is 3 shirts and 1 pair of pants');
phoneContacts.contacts[8].taskList.addTask(task_8_0);


/*/FIXME: Delete this sample task
mySampleTask = new Task('Shampoo',me);
mySampleTask.setBrand('Dove');
mySampleTask.setLocation ( 'CVS', 42.29285127750455, 71.23519648439037);
mySampleTask.setMaxPrice ('$7.00');
mySampleTask.shareWith(phoneContacts.getContact(Contact.nameToId('Matt Sternke')));
mySampleTask.setPriority ('Medium');
me.taskList.addTask(mySampleTask);
/*/

phoneContacts.sort();
