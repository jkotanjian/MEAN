var express = require("express");
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname, + "/static"));
app.use(session({ secret: "dontaskitllbeawasteofyourtime", resave: true, saveUninitialized: false, cookie: { masAge: 60000 }}));

app.get('/', function (request, response) {
	response.render('index');
});
app.post('/result', function (request, response) {
	response.render('results', {info: request.body});
});

app.listen(8000, function() {
	console.log("Listening on port 8000");
})