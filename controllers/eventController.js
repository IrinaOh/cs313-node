const eventModels = require("../models/eventModel.js");

function getEventList(req, res) {
	//get the list of all events
	console.log("Getting all events ...");

	topicModel.getAllEvents(function(results){
		res.json(results);
	});

function getEvent(req, res) {
	//get the single event by id
	console.log("Getting the event with param id:" + event_id);

	var event_id  = req.query.event_id;
	// var results = eventModel.getEventById(event_id);

	topicModel.getEventById(event_id, function(results){	
		res.json(results);
	})

function postEvent(req, res) {
	var event_name = req.body.event_name;
	console.log("Creating a new event with name :" + event_name);

	// var results = eventModel.postEvent(event_name);

	eventModel.postEvent(event_name, function(results){
		res.json();
	});
}