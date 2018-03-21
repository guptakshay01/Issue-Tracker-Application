
/* display issue */
function displayIssues() {
	var issues = JSON.parse(localStorage.getItem('issues'));
	var issueList = document.getElementById('issueList');

	issueList.innerHTML = '';

	for(var i = 0; i < issues.length; i++){
		var id = issues[i].id;
		var description = issues[i].description;
		var severity = issues[i].severity;
		var assignedTo = issues[i].assignedTo;
		var status = issues[i].status;

		issueList.innerHTML += '<div class="well">' +
							   '<h6>Issue ID: '+ id +'</h6>' +
							   '<p><span class="label label-info">'+ status +'</span></p>' +
							   '<h3>'+ description +'</h3>'
							   '<p><span class="glyphicon glyphicon-time">'+ severity +'</span></p>' +
							   '<p><span class="glyphicon glyphicon-user">'+ assignedTo +'</span></p>' +
							   '<a href="#" onClick="setStatusClosed(\''+ id +'\')" class="btn btn-warning">Close</a>' +
							   '<a href="#" onClick="deleteIssue(\''+ id +'\')" class="btn btn-primary">Delete</a>' +
							   '</div>'
	}
}