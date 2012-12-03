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

var center_lat = 42.3384308;
var center_long = -71.1097732;
var myLocation_lat = 42.3284308;
var myLocation_long = -71.1197732;

//populated immediately
noAppPhoneContacts = new ContactList();
phoneContacts = new ContactList();
pendingContacts = new ContactList();
//populated with use of the app
selectedContacts = new ContactList();
addedFriends = new ContactList();

//add myself to the list
me = new Contact("Me","http://sphotos-b.xx.fbcdn.net/hphotos-ash4/422186_10151147600205676_1487493643_n.jpg");
var myTask = new Task('Test', me);
myTask.setLocation("Bathroom", random_lat(), random_long());
me.taskList.addTask(myTask);
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

var phoneContactNames = [];
phoneContactNames[0] = "Danny Marz";
phoneContactNames[1] = "Jasper Maniates-Selvin";
phoneContactNames[2] = "Kristine Kammers";
phoneContactNames[3] = "Matt Sternke";
phoneContactNames[4] = "Michael Gallert";
phoneContactNames[5] = "Michelle Kammers";
phoneContactNames[6] = "Nicholas Pjevach";
var phoneContactImgPaths = [];
phoneContactImgPaths[0] = "http://sphotos-a.xx.fbcdn.net/hphotos-ash4/417209_3743771907195_821635797_n.jpg";
phoneContactImgPaths[1] = "http://sphotos-a.xx.fbcdn.net/hphotos-ash4/402325_102279099927802_256062279_n.jpg";
phoneContactImgPaths[2] = "http://sphotos-a.xx.fbcdn.net/hphotos-ash3/559289_10151360489702784_1004500304_n.jpg";
phoneContactImgPaths[3] = "http://sphotos-a.xx.fbcdn.net/hphotos-ash4/422314_10151066270671588_824227318_n.jpg";
phoneContactImgPaths[4] = "http://sphotos-b.xx.fbcdn.net/hphotos-prn1/61411_4971155997384_393351046_n.jpg";
phoneContactImgPaths[5] = "http://sphotos-b.xx.fbcdn.net/hphotos-ash4/p206x206/381682_10151241254989492_1637677474_n.jpg";
phoneContactImgPaths[6] = "http://sphotos-a.xx.fbcdn.net/hphotos-prn1/558459_10152082072565006_773901193_n.jpg";

var pendingContactNames = [];
pendingContactNames[0] = "Peter Lokken";
pendingContactNames[1] = "Sean O\'Toole";
var pendingContactImgPaths = [];
pendingContactImgPaths[0] = "http://sphotos-a.xx.fbcdn.net/hphotos-ash4/217887_3671299698325_900707314_n.jpg";
pendingContactImgPaths[1] = "http://sphotos-b.xx.fbcdn.net/hphotos-ash4/402372_2853430369225_1990434808_n.jpg";


for (var i = 0; i < noAppContactNames.length; i++) {
	noAppPhoneContacts.addContact(new Contact(noAppContactNames[i], noAppContactImagePaths[i]));
}

//var tempFriend = new Contact(phoneContactNames[0], phoneContactImgPaths[0]);
//addedFriends.addContact(tempFriend);
//selectedContacts.addContact(tempFriend);

for (var i=0; i < phoneContactNames.length; i++){
	phoneContacts.addContact(new Contact(phoneContactNames[i], phoneContactImgPaths[i]));
}
for (var i = 0; i < pendingContactNames.length; i++) {
	pendingContacts.addContact(new Contact(pendingContactNames[i], pendingContactImgPaths[i]));
}

/*Initialize task lists*/

newTaskList = new TaskList();

/*phone Contacts*/
var task_0_0 = new Task('Shampoo',phoneContacts.contacts[0]);
task_0_0.setBrand('Dove');
task_0_0.setLocation ( 'CVS', random_lat(), random_long());
task_0_0.setMaxPrice ('$7.00');
task_0_0.setPriority ('Medium');
phoneContacts.contacts[0].taskList.addTask(task_0_0)
//tempFriend.taskList.addTask(task_0_0);

var task_0_1 = new Task('Pick Up Pizza',phoneContacts.contacts[0]);
task_0_1.setLocation ( 'Tonys', random_lat(), random_long());
task_0_1.setMaxPrice ('$23.79');
task_0_1.setPriority ('High');
task_0_1.setNotes ('Under the name Marz. 3 Pizzas. Bring to my house for poker night.');
phoneContacts.contacts[0].taskList.addTask(task_0_1);
//tempFriend.taskList.addTask(task_0_1);

newTaskList = new TaskList();

var task_1_0 = new Task('Gummy Vitamins',phoneContacts.contacts[1]);
task_1_0.setBrand('Store Brand');
task_1_0.setLocation ( 'Target', random_lat(), random_long());
task_1_0.setMaxPrice ('$10.00');
task_1_0.setPriority ('Low');
task_1_0.setNotes ('Get which ever size is the cheapest per oz.');
phoneContacts.contacts[1].taskList.addTask(task_1_0);

newTaskList = new TaskList();

var task_3_0 = new Task('Advil',phoneContacts.contacts[3]);
task_3_0.setBrand('Advil');
task_3_0.setLocation ( 'CVS', random_lat(), random_long());
task_3_0.setPriority ('High');
task_3_0.setNotes ('Liqui-gels');
phoneContacts.contacts[3].taskList.addTask(task_3_0);

var task_3_1 = new Task('Dog Food',phoneContacts.contacts[3]);
task_3_1.setBrand('Blue Buffalo');
task_3_1.setLocation ( 'PetSmart', random_lat(), random_long());
task_3_1.setMaxPrice ('$25.00');
task_3_1.setPriority ('Low');
phoneContacts.contacts[3].taskList.addTask(task_3_1);

newTaskList = new TaskList();

var task_4_0 = new Task('Perennials',phoneContacts.contacts[4]);
task_4_0.setLocation ( 'Home Depot', random_lat(), random_long());
task_4_0.setMaxPrice ('$10');
task_4_0.setPriority ('Low');
task_4_0.setNotes ('I am ok with most types. I prefer red ones :)');
phoneContacts.contacts[4].taskList.addTask(task_4_0);

newTaskList = new TaskList();

console.log(phoneContacts)
var task_6_0 = new Task('Milk and Oil',phoneContacts.contacts[6]);
task_6_0.setLocation ( 'Shaws', random_lat(), random_long());
task_6_0.setMaxPrice ('$10');
task_6_0.setPriority ('High');
task_6_0.setNotes ('Skim milk, Olive Oil');
phoneContacts.contacts[6].taskList.addTask(task_6_0);

/*pendingContacts*/

newTaskList = new TaskList();

var task_1_0 = new Task('Dry Cleaning',pendingContacts.contacts[1]);
task_1_0.setLocation ( 'Lucky Dry Cleaning', random_lat(), random_long());
task_1_0.setPriority ('Medium');
task_1_0.setNotes ('Already paid for. It is 3 shirts and 1 pair of pants');
pendingContacts.contacts[1].taskList.addTask(task_1_0);



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
pendingContacts.sort();
noAppPhoneContacts.sort();
