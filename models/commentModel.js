function searchByEvent(event_name, callback){
	console.log("Searching for db for event: " + event_name);

	var results = {list:[{id:1, event_name:event_name, comment_text:"Great event!"},
		{id:2, event_name:event_name, comment_text:"Test"}
		]};

	callback(null, results);
}

function searchByMember(id, callback){

	var results = {list:[{comment_id:1, comment_text:"Great event!"},
		{comment_id:2, comment_text:"Test"}
		]};

	callback(null, results);
}

function getAllComments(callback){

	var results = {list:[{comment_id:1, comment_text:"Great event!"},
		{comment_id:2, comment_text:"Test"}
		]};

	callback(null, results);
}

function getCommentById(id, callback){

	var results = {comment_id:1, comment_text:"Great event!"};
		
	callback(null, results);
}

function insertNewComment(comment_text, callback){

	var results = {success:true, 
		comment:{comment_id:1, comment_text:comment_text}};

	callback(null, results);
}

function assignEventToComment(eventId, commentId, callback){

	var results = {success:true};

	callback(null, results);
}

module.exports = {
	searchByEvent: searchByEvent,
	searchByMember: searchByMember,
	getAllComments: getAllComments,
	getCommentById: getCommentById,
	insertNewComment: insertNewComment,
	assignEventToComment: assignEventToComment
};