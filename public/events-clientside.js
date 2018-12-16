function getAllEvents(){
	console.log("Getting all events");

	$.get("/events", function(data){
		console.log("Back from the server with:");
		console.log(data);

		for(var i = 0; i < data.list.length; i++){
			var event = data.list[i];

			$("#ulEvents").append("<li><a>" + event.event_name + "</a></li>");
		}
		
	});
}

function insertNewEvent(){
	console.log("Inserting new event client side");

	$.get("/events", function(data){
		console.log("Back from the server with:");
		console.log(data);
		for(var i = 0; i < data.list.length; i++){
			var event = data.list[i];

			$("#ulEvents").append("<li><a>" + event.event_name + "</a></li>");
		}
	});
}
