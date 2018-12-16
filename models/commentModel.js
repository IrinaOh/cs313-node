const {Pool} = require("pg");
const db_url = process.env.DATABASE_URL;
const pool = new Pool({connectionString:db_url});


function searchByEvent(event_name, callback){
	console.log("Searching for db for event: " + event_name);

	var sql = "SELECT comment_id, comment_text, member_id, event_id FROM comment";
	// var params = [event_name];
	pool.query(sql, function(err, db_results) { //add params, to pool.query to select by clause
		if (err) {
			throw err;
		} else{
			// we got some successful results from db
			// console.log("Back from the db with:");
			// console.log(db_results);

			var results = {
				success:true,
				list:db_results.rows
				};

			callback(null, results);
		}
	});
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