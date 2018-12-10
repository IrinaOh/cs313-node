function getAllEvents(callback) {
	// get all the events from DB

	var results= {
		events:[
			{id:1, name:"Thanksgiving"},
			{id:2, name:"Christmas"}
		]
	}
	callback(results);
}

function getEventById(id, callback) {
	// get the topic from DB that matches that id

	var results = {id:id, name:"Hanukkah"};
	callback(results);
}

function insertNewEvent(name, callback) {
	// create a new event in DB with the provided name
	var results = {success:true};
	callback(results);
}

module.exports = {
	getAllEvents:getAllEvents,
	getEventById: getEventById,
	insertNewEvent: insertNewEvent
};