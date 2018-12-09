function searchByEvent(){
	console.log("Searching by event");

	var event = $("#event").val();
	console.log("Event:" + event_name);

	$.get("/search", {event_name:event_name},function(data){
		console.log("Back from the server with:");
		console.log(data);


		for(var i=0; i < data.list.length; i ++){
			var comment = data.list[i];
			console.log(comment);

			$("#ulComments").append("<li>" + comment.comment_text + "</li>");
		}
		
		// $("#ulComments").append("<li>item2</li>");
		// $("#ulComments").append("<li>item3</li>");
	});
}

function searchByMember(){
	console.log("Searching by member");
}