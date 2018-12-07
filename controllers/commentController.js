const commentModel = require("../models/commentModel.js");

function search(req, res){

	var id; //comes from query
	commentModel.searchByMember(id, function(results){
		res.json(results);
	});

	var event_id;
	commentModel.searchByEvent(event_id, function(results){
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

	var comment = "Great!";
	commentModel.postComment(comment, function(results){
		res.json(results);
	});
}

function assignCommentToEvent(req, res){

	var comment_id = 1;
	var event_id = 1;
	commentModel.assignCommentToEvent(comment_id, event_id, function(results){
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