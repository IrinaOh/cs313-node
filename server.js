var express = require("express");
var app = express();
const{Pool} = require("pg");
const connectionString = process.env.DATABASE_URL || "postgres://postgres:password@localhost:5432/family"
const pool = new Pool({connectionString: connectionString});
app.set("port", (process.env.PORT||5000));

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get("/getPerson", getPerson);
app.get("/", getEvent);

app.listen(app.get("port"), function(){
    console.log("Now listening for connections on port: ", app.get("port"));
});

function getEvent(req, res) {
    console.log("Getting person information");
    var id = req.query.id;
    //will display in terminal:
    console.log("Retrieving a person with id: ", id);
    getEventFromDb(id, function (error, result) {
        if (error || result == null || result.length !=1) {
            res.status(500).json({success:false, data: error});
        }else{
            res.json(result[0]);
        }
    });
}
// function calcRate(req, res) {
//     var type = req.query.type
//     var weight = Number(req.query.weight)
//     doMath(res, type, weight)
// }
function getEventFromDb(id, callback) {
    console.log("getPersonFromDb called with id:", id);
    var sql = "SELECT id, first_name, last_name FROM member WHERE id = $1::int";
    var params = [id];
    pool.query(sql, params, function (error, result) {
        if (error) {
            console.log("An error with the DB occured");
            console.log(error);
            callback(error, null);
        }
        console.log("Found DB result: " + JSON.stringify(result.rows));
        callback(null, result.rows);
    });
}

function getPerson(req, res) {
    console.log("Getting person information");
    var id = req.query.id;
    //will display in terminal:
    console.log("Retrieving a person with id: ", id);
    getPersonFromDb(id, function (error, result) {
        if (error || result == null || result.length !=1) {
            res.status(500).json({success:false, data: error});
        }else{
            res.json(result[0]);
        }
    });
}
function getPersonFromDb(id, callback) {
    console.log("getPersonFromDb called with id:", id);
    var sql = "SELECT id, first_name, last_name FROM member WHERE id = $1::int";
    var params = [id];
    pool.query(sql, params, function (error, result) {
        if (error) {
            console.log("An error with the DB occured");
            console.log(error);
            callback(error, null);
        }
        console.log("Found DB result: " + JSON.stringify(result.rows));
        callback(null, result.rows);
    });
}