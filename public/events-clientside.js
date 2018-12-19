function getAllEvents(){
	console.log("Getting all events");

	$.get("/events", function(data){
		console.log("Back from the server with:");
		console.log(data);
		$("#ulEvents").html("");
		for(var i = 0; i < data.list.length; i++){
			var event = data.list[i];

			$("#ulEvents").append("<li><button class='small-btn' onclick='getEventById(" + event.event_id + ")'> Delete </button> <b>" + event.event_name + "</b> - date: " + event.event_date + ", location: " + event.event_location + " </li>");
		}		
	});
}

function getEventById(event_id){
	console.log("Getting event by id", event_id);
	var params = {event_id:event_id};
	$.post("/eventById", params, function(data, status){
		console.log("Back from the server with:");
		console.log(data);	
	});
	$.get("/events", function(data){
		$("#ulEvents").html("");
		for(var i = 0; i < data.list.length; i++){
			var event = data.list[i];

			$("#ulEvents").append("<li onclick='getEventById(" + event.event_id + ")'><input type='hidden' id='" + event.event_id + "'><b>" + event.event_name + "</b> - date:" + event.event_date + ", location: " + event.event_location + " </li>");
		}		
	});
}

function insertNewEvent(){
	//collect user's input
	var eventName = $("#eventName").val();
	var eventDate = $("#eventDate").val();
	var eventLocation = $("#eventLocation").val();

    // Set up the parameters to send to the API
    var params = {
    	event_name: eventName,
		event_date: eventDate,
		event_location: eventLocation
	};
	console.log("Inserting new event client side");

	$.post("/event", params, function(data, status){
		console.log("Back from the server with:");
		console.log(data);
		console.log(status);

		if (status == "success") {
			$("#success-message").append("<p>New event was successfully added.</p>");
		}else{
			$("#success-message").append("<p>An error occurred adding new event.</p>");
		}
	});
}

function login() {
	var loginName = $("#loginName").val();
	var password = $("#password").val();

    var params = {
    	login_name: loginName,
		password: password
	};

	$.post("/login", params, function(data, status){});
	// $.get("/events", params, function(data, status) {});
}
