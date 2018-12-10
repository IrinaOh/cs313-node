const eventModel = require("../models/eventModel.js");

function getEventList(req, res) {
	console.log("Getting all events");

	var event_name = res.query;
	eventModel.getAllEvents(event_name, function(error, results) {
		res.json(results);
	});
}

function getEvent(req, res) {
	var id = req.query.id;
	console.log("Getting one event with id:" + id);

	eventModel.getEventById(id, function(results) {
		res.json(results);
	});
}

function postEvent(req, res) {
	var name = req.body.name;
	console.log("Creating a new event with name:" + name);
	eventModel.insertNewEvent(name, function(results) {
		res.json(results);
	});
}

module.exports = {
	getEventList:getEventList,
	getEvent:getEvent,
	postEvent:postEvent
};