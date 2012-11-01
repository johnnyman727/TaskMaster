function changeIFrameSource(event){
	destPage=event.data.url;
	console.log(destPage)
	$('#innerContent').attr("src","./innerContentFrame.html"+destPage)
}

function initializeNavbar(){
	$("#taskListButton").click({url:'#taskList'},changeIFrameSource)
	$("#addTaskButton").click({url:'#addTask'},changeIFrameSource)
	$("#viewMapButton").click({url:'#mapPage'},changeIFrameSource)
}


$(document).ready(initializeNavbar);
