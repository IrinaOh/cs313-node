const commentModel = require("../models/commentModel.js");

function search(req, res){
	// TODO check if member id or event id and call an appropriate function

	// var memberId; //comes from the query
	// commentModel.searchByMember(memberId, function(results){
	// 	res.json(results);
	// });

	var event_name = req.query.event_name;
	commentModel.searchByEvent(event_name, function(error, results){
		res.json(results);
	});
}

function getCommentList(req, res){

	commentModel.getAllComments(function(results){
		res.json(results);
	});
}

function getComment(req, res){

	var id =1;
	commentModel.getCommentById(id, function(results){
		res.json(results);
	});
}

function postComment(req, res){

	var comment_text = "Great!";
	commentModel.insertNewComment(comment_text, function(results){
		res.json(results);
	});
}

function assignEventToComment(req, res){

	var commentId = 1;
	var eventId = 1;
	var comment_text = "Great event!"
	commentModel.assignCommentToEvent(commentId, eventId, comment_text, function(results){
		res.json(results);
	});
}

module.exports = {
	search: search,
	getCommentList: getCommentList,
	getComment: getComment,
	postComment: postComment,
	assignEventToComment: assignEventToComment
};