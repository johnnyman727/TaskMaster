/* Initializes the Navigation bar on the top of the app*/

function changeIFrameSource(event){
	destPage=event.data.url;
	$('#innerContent').attr("src","./innerContentFrame.html"+destPage)
}

function initializeNavbar(){
	console.log('initializing the navbar')
	$("#taskListButton").click({url:'#taskList'},changeIFrameSource)
	$("#addTaskButton").click({url:'#addTask'},changeIFrameSource)
	$("#viewMapButton").click({url:'#mapPage'},changeIFrameSource)
}

function selectTaskList(){
	$("#taskListButton").trigger('click')
}

$(document).ready(initializeNavbar);
$(document).ready(selectTaskList)
