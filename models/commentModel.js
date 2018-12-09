function searchByEvent(event_id, callback){
	console.log("Searching for db for event: " + event_name)

	var results = {list:[{comment_id:1, comment_text:"Great event!"},
		{comment_id:2, comment_text:"Test"}
		]};

	callback(null, results);
}

function searchByMember(id, callback){

	var results = {list:[{comment_id:1, comment_text:"Great event!"},
		{comment_id:2, comment_text:"Test"}
		]};

	callback(null, results);
}

function getCommentList(req, res){

	var results = {list:[{comment_id:1, comment_text:"Great event!"},
		{comment_id:2, comment_text:"Test"}
		]};

	callback(null, results);
}

function getComment(id, callback){

	var results = {comment_id:1, comment_text:"Great event!"};
		
	callback(null, results);
}

function postComment(comment_text, callback){

	var results = {success:true, 
		comment:{comment_id:1, comment_text:comment_text}};

	callback(null, results);
}

function assignCommentToEvent(req, res){

	var results = {success:true};

	callback(null, results);
}

module.exports = {
	searchByEvent: searchByEvent,
	searchByMember: searchByMember,
	getCommentList: getCommentList;
	getComment: getComment;
	postComment: postComment;
	assignCommentToEvent: assignCommentToEvent;
};