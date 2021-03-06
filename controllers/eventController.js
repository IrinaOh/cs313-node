const eventModel = require("../models/eventModel.js");

function getEventList(req, res) {
	console.log("Getting all events");

	var event_name = res.query;
	eventModel.getAllEvents(event_name, function(error, results) {
		res.json(results);
	});
}

function updateEvent(req, res) {
	var event_id = req.body.event_id;
	var event_name = req.body.event_name;
	var event_date = req.body.event_date;
	var event_location = req.body.event_location;
	console.log("Getting one event with id:" + event_id);

	eventModel.updateEventById(event_id, event_name, event_date, event_location, function(results) {
		res.json(results);
	});
}

function getEvent(req, res) {
	var event_id = req.body.event_id;
	console.log("Getting one event with id:" + event_id);

	eventModel.getEventById(event_id, function(results) {
		res.json(results);
	});
}

function postEvent(req, res) {
	console.log(req.body);
	var event_name = req.body.event_name;
	var event_date = req.body.event_date;
	var event_location = req.body.event_location;

	console.log("Creating a new event with name:" + event_name);
	eventModel.insertNewEvent(event_name, event_date, event_location, function(error, results) {
		res.json(results);
	});
}

module.exports = {
	getEventList:getEventList,
	getEvent:getEvent,
	postEvent:postEvent
};