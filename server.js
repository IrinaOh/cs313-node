const express = require("express");
const path = require("path");
// const eventController = require("./controllers/eventController.js");
const PORT  = process.env.PORT || 5000;

var app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json()); //support json encoded bodies
app.use(express.urlencoded({extended: true})) //support url encoded bodies

app.get("/events", eventController.getEventList);

app.get("/event", eventController.getEvent);

app.post("/event", eventController.postEvent);

app.listen(PORT, function() {
    console.log("Server listening on port " + PORT);
});