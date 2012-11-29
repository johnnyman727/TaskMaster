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
pendingContacts = new ContactList();
selectedContacts = new ContactList();
addedFriends = new ContactList();
noAppPhoneContacts = new ContactList();

//add myself to the list
me = new Contact("Me","http://sphotos-b.xx.fbcdn.net/hphotos-ash4/422186_10151147600205676_1487493643_n.jpg",new TaskList());

addedFriends.addContact(me);
selectedContacts.addContact(me);

var noAppContactNames = [];
noAppContactNames[0] = "Andrew Heine";
noAppContactNames[1] = "Graham Hooton";
noAppContactNames[2] = "Michael Heynes";
noAppContactNames[3] = "Mark Chang";
noAppContactNames[4] = "Reyner Crosby";
noAppContactNames[5] = "Jackie Rose";
noAppContactNames[6] = "Kendall Pletcher";
noAppContactNames[7] = "Shane Moon";
noAppContactNames[8] = "Noah Tye";

var noAppContactImagePaths = [];
noAppContactImagePaths[0] = "http://sphotos-a.xx.fbcdn.net/hphotos-snc6/282657_4184591063364_1377576774_n.jpg";
noAppContactImagePaths[1] = "http://sphotos-a.xx.fbcdn.net/hphotos-prn1/546778_3561134121439_1071268271_n.jpg";
noAppContactImagePaths[2] = "http://sphotos-a.xx.fbcdn.net/hphotos-ash3/542853_10151097090572452_2100420120_n.jpg";
noAppContactImagePaths[3] = "http://sphotos-b.xx.fbcdn.net/hphotos-ash4/376642_4188453346613_1150685951_n.jpg";
noAppContactImagePaths[4] = "http://sphotos-a.xx.fbcdn.net/hphotos-snc6/225804_3647073704734_196986550_n.jpg";
noAppContactImagePaths[5] = "http://sphotos-b.xx.fbcdn.net/hphotos-ash3/550081_4573984022627_34621261_n.jpg";
noAppContactImagePaths[6] = "http://sphotos-b.xx.fbcdn.net/hphotos-ash3/547062_4113768488169_1970487092_n.jpg";
noAppContactImagePaths[7] = "http://sphotos-b.xx.fbcdn.net/hphotos-ash4/217012_2016785623789_1364468_n.jpg";
noAppContactImagePaths[8] = "http://sphotos-b.xx.fbcdn.net/hphotos-snc7/4447_90317480145_2691353_n.jpg";

for (var i = 0; i < noAppContactNames.length; i++) {
	noAppPhoneContacts.addContact(new Contact(noAppContactNames[i], noAppContactImagePaths[i],new TaskList()));
}

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
contactImgPaths[0] = "http://sphotos-a.xx.fbcdn.net/hphotos-ash4/417209_3743771907195_821635797_n.jpg";
contactImgPaths[1] = "http://sphotos-a.xx.fbcdn.net/hphotos-ash4/402325_102279099927802_256062279_n.jpg";
contactImgPaths[2] = "http://sphotos-a.xx.fbcdn.net/hphotos-ash3/559289_10151360489702784_1004500304_n.jpg";
contactImgPaths[3] = "http://sphotos-a.xx.fbcdn.net/hphotos-ash4/422314_10151066270671588_824227318_n.jpg";
contactImgPaths[4] = "http://sphotos-b.xx.fbcdn.net/hphotos-prn1/61411_4971155997384_393351046_n.jpg";
contactImgPaths[5] = "http://sphotos-b.xx.fbcdn.net/hphotos-ash4/p206x206/381682_10151241254989492_1637677474_n.jpg";
contactImgPaths[6] = "http://sphotos-a.xx.fbcdn.net/hphotos-prn1/558459_10152082072565006_773901193_n.jpg";
contactImgPaths[7] = "http://sphotos-a.xx.fbcdn.net/hphotos-ash4/217887_3671299698325_900707314_n.jpg";
contactImgPaths[8] = "http://sphotos-b.xx.fbcdn.net/hphotos-ash4/402372_2853430369225_1990434808_n.jpg";

/*Initialize task lists*/
var taskLists = [];

taskLists[0] = new TaskList();

task_0_0 = new Task('Shampoo',contactNames[0]);
task_0_0.setBrand('Dove');
task_0_0.setLocation ( 'CVS', 42.29285127750455, 71.23519648439037);
task_0_0.setMaxPrice ('$7.00');
task_0_0.setPriority ('Medium');
taskLists[0].addTask(task_0_0);

task_0_1 = new Task('Pick Up Pizza',contactNames[0]);
task_0_1.setLocation ( 'Tonys');
task_0_1.setMaxPrice ('$23.79');
task_0_1.setPriority ('High');
task_0_1.setNotes ('Under the name Marz. 3 Pizzas. Bring to my house for poker night.');
taskLists[0].addTask(task_0_1);

taskLists[1] = new TaskList();

task_1_0 = new Task('Gummy Vitamins',contactNames[1]);
task_1_0.setBrand('Store Brand');
task_1_0.setLocation ( 'Target', 42.27285127750455, 71.23019648439037);
task_1_0.setMaxPrice ('$10.00');
task_1_0.setPriority ('Low');
task_1_0.setNotes ('Get which ever size is the cheapest per oz.');
taskLists[1].addTask(task_1_0);

taskLists[2] = new TaskList();

taskLists[3] = new TaskList();

task_3_0 = new Task('Advil',contactNames[3]);
task_3_0.setBrand('Advil');
task_3_0.setLocation ( 'CVS', 42.29285127750455, 71.23519648439037);
task_3_0.setPriority ('High');
task_3_0.setNotes ('Liqui-gels');
taskLists[3].addTask(task_3_0);

task_3_1 = new Task('Dog Food',contactNames[3]);
task_3_1.setBrand('Blue Buffalo');
task_3_1.setLocation ( 'PetSmart', 42.285127750455, 71.24319648439037);
task_3_1.setMaxPrice ('$25.00');
task_3_1.setPriority ('Low');
taskLists[3].addTask(task_3_1);

taskLists[4] = new TaskList();

task_4_0 = new Task('Perennials',contactNames[4]);
task_4_0.setLocation ( 'Home Depot', 42.2935127750455, 71.254319648439037);
task_4_0.setMaxPrice ('$10');
task_4_0.setPriority ('Low');
task_4_0.setNotes ('I am ok with most types. I prefer red ones :)');
taskLists[4].addTask(task_4_0);

taskLists[5] = new TaskList();

taskLists[6] = new TaskList();

task_6_0 = new Task('Milk and Oil',contactNames[6]);
task_6_0.setLocation ( 'Shaws', 42.2934, 71.2456);
task_6_0.setMaxPrice ('$10');
task_6_0.setPriority ('High');
task_6_0.setNotes ('Skim milk, Olive Oil');
taskLists[6].addTask(task_6_0);

taskLists[7] = new TaskList();

taskLists[8] = new TaskList();

task_8_0 = new Task('Dry Cleaning',contactNames[8]);
task_8_0.setLocation ( 'Lucky Dry Cleaning', 42.28734, 71.242256);
task_8_0.setPriority ('Medium');
task_8_0.setNotes ('Already paid for. It is 3 shirts and 1 pair of pants');
taskLists[8].addTask(task_8_0);


for (var i=0; i < contactNames.length - 2; i++){
	phoneContacts.addContact(new Contact(contactNames[i], contactImgPaths[i], taskLists[i]));
}

for (var i = contactNames.length - 2; i < contactNames.length; i++) {
	pendingContacts.addContact(new Contact(contactNames[i], contactImgPaths[i], taskLists[i]));
}


//FIXME: Delete this sample task
mySampleTask = new Task('Shampoo',me);
mySampleTask.setBrand('Dove');
mySampleTask.setLocation ( 'CVS', 42.29285127750455, 71.23519648439037);
mySampleTask.setMaxPrice ('$7.00');
mySampleTask.shareWith(phoneContacts.getContact(Contact.nameToId('Matt Sternke')));
mySampleTask.setPriority ('Medium');
me.taskList.addTask(mySampleTask);
//

phoneContacts.sort();
pendingContacts.sort();