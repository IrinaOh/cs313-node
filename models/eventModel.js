function getAllEvents(callback) {
	// get all the events from DB

	var results = {
		events:[
		{event_id:1, event_name: "Thanksgiving"},
		{event_id:2, event_name: "Christmas Dinner"}
		]
	}
	return results;

}

function getEventById(event_id, callback) {
	// get the topic from DB that matches that id

	var results = {event_id:event_id, event_name: "Christmas"};
	return results;
}

function insertNewEvent(event_name, callback) {
	// create a new event in DB with the provided name
	var results = {success:true};
	return results;
}

module.exports = {
	getAllEvents:getAllEvents,
	getEventById: getEventById,
	postEvent: postEvent
};