var express = require("express");
var session = require('express-session');
var bodyParser = require('body-parser');
var counter = 1;
var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname, + "/static"));
app.use(session({ secret: "dontaskitllbeawasteofyourtime", resave: true, saveUninitialized: false, cookie: { masAge: 60000 }}));

app.get('/', function (request, response) {
	counter ++;
	response.render('index', {count: counter});
});
app.post('/reset', function (request, response) {
	counter = 0;
	response.redirect('/');
});
app.post('/two', function (request, response) {
	counter ++;
	response.redirect('/');
});

app.listen(8000, function() {
	console.log("Listening on port 8000");
})