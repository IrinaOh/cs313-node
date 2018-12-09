const commentModel = require("../models/commentModel.js");

function search(req, res){
	// TODO check if member id or event id and call an appropriate function

	var id; //comes from the query
	commentModel.searchByMember(id, function(results){
		res.json(results);
	});

	var event_name = req.query.event_name;
	commentModel.searchByEvent(event_name, function(results){
		res.json(results);
	});
}

function getCommentList(req, res){

	commentModel.getCommentList(function(results){
		res.json(results);
	});
}

function getComment(req, res){

	var id =1;
	commentModel.getComment(id, function(results){
		res.json(results);
	});
}

function postComment(req, res){

	var comment_text = "Great!";
	commentModel.postComment(comment_text, function(results){
		res.json(results);
	});
}

function assignCommentToEvent(req, res){

	var comment_id = 1;
	var event_id = 1;
	var comment_text = "Great event!"
	commentModel.assignCommentToEvent(comment_id, event_id, comment_text, function(results){
		res.json(results);
	});
}

module.exports = {
	search: search,
	getCommentList: getCommentList,
	getComment: getComment;
	postComment: postComment;
	assignCommentToEvent: assignCommentToEvent;
};


app.get("/search", commentController.search);
app.get("/comments", commentController.getCommentList);
app.get("/comment", commentController.getComment);
app.post("/comment", commentController.postComment);
app.post("/assignCommentToEvent", commentController.assignCommentToEvent);
