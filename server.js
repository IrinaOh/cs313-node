const express = require("express");
const path = require("path");
require("dotenv").config();
const eventController = require("./controllers/eventController.js");
const commentController = require("./controllers/commentController.js");
const PORT  = process.env.PORT || 5000;

var app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json()); //support json encoded bodies
app.use(express.urlencoded({extended: true})); //support url encoded bodies

// app.get("/search", eventController.search);
app.get("/", (req, res) => {
	res.json({message:"login here"});
});
app.get("/events", eventController.getEventList);
app.get("/event", eventController.getEvent);
app.post("/event", eventController.postEvent);

app.get("/search", commentController.search);
app.get("/comments", commentController.getCommentList);
app.get("/comment", commentController.getComment);
app.post("/comment", commentController.postComment);
app.post("assignEventToComment", commentController.assignEventToComment);

app.listen(PORT, function() {
    console.log("Server listening on port " + PORT);
});