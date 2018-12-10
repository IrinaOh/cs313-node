function searchByEvent(){
	console.log("Searching by event");

	var event_name = $("#event").val();
	console.log("Event:" + event_name);

	$.get("/search", {event_name:event_name}, function(data){
		console.log("Back from the server with:");
		console.log(data);

		for(var i = 0; i < data.list.length; i++){
			var comment = data.list[i];

			$("#ulComments").append("<li>" + comment.comment_text + "</li>");
		}
		
	});
}

function searchByMember(){
	console.log("Searching by member");
}