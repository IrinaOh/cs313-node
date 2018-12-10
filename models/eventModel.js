const {Pool} = require("pg");

const db_url = process.env.DATABASE_URL;
// console.log("DB URL: " + db_url);
const pool = new Pool({connectionString:db_url});

function getAllEvents(callback) {
	// get all the events from DB
	var sql = "SELECT event_id, event_name, event_date, event_location, event_host FROM event";

	pool.query(sql, function(err, db_results) {
		// if(err){
		// 	throw err;
		// }else{
			var results = {
				success:true,
				list:db_results.rows
			};
			callback(null, results);
		// }
	});
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