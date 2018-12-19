const express = require("express");
const path = require("path");
require("dotenv").config();
const eventController = require("./controllers/eventController.js");
const commentController = require("./controllers/commentController.js");
const authController = require("./controllers/authController");
const PORT  = process.env.PORT || 5000;

//remove this three lines:
const {Pool} = require("pg");
const db_url = process.env.DATABASE_URL;
const pool = new Pool({connectionString:db_url});

var app = express();
var session = require('express-session');
// set the view engine to ejs
app.set('view engine', 'ejs');

// set up sessions
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json()); //support json encoded bodies
app.use(express.urlencoded({extended: true})); //support url encoded bodies


app.use(logRequest);

// Setup our routes
app.post('/login', handleLogin);
app.post('/logout', handleLogout);
// This method has a middleware function "verifyLogin" that will be called first
app.get('/getServerTime', verifyLogin, getServerTime);

app.get("/events", eventController.getEventList);
// app.get("/updateEventById", eventController.updateEvent);
app.post("/eventById", eventController.getEvent);
app.post("/event", eventController.postEvent);

// app.get("/search", commentController.search);
// app.get("/comments", commentController.getCommentList);
// app.get("/comment", commentController.getComment);
// app.post("/comment", commentController.postComment);
// app.post("assignEventToComment", commentController.assignEventToComment);

app.listen(PORT, function() {
    console.log("Server listening on port " + PORT);
});

// Checks if the username and password match a hardcoded set
// If they do, put the username on the session
function handleLogin(request, response) {
	var result = {success: false};

	var sql = "SELECT id, username, password FROM member WHERE event_id=$1";
	var value = [request.body.username];

	pool.query(sql, value, function(err, db_results) {
		if(err){
			throw err;
		}else if (request.body.username == "Ira" && request.body.password == "password") {
			request.session.user = request.body.username;
			// result = {success: true};
			var results = {
				success:true,
				list:db_results.rows
			};
			callback(null, results);
		}
	});
}

// If a user is currently stored on the session, removes it
function handleLogout(request, response) {
	var result = {success: false};

	// We should do better error checking here to make sure the parameters are present
	if (request.session.user) {
		request.session.destroy();
		result = {success: true};
	}

	response.json(result);
}

// This function returns the current server time
function getServerTime(request, response) {
	var time = new Date();
	
	var result = {success: true, time: time};
	response.json(result); 
}

// This is a middleware function that we can use with any request
// to make sure the user is logged in.
function verifyLogin(request, response, next) {
	if (request.session.user) {
		// They are logged in!

		// pass things along to the next function
		next();
	} else {
		// They are not logged in
		// Send back an unauthorized status
		var result = {succes:false, message: "Access Denied"};
		response.status(401).json(result);
	}
}

// This middleware function simply logs the current request to the server
function logRequest(request, response, next) {
	console.log("Received a request for: " + request.url);

	// don't forget to call next() to allow the next parts of the pipeline to function
	next();
}