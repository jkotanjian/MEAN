var express = require("express");
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();

const server = app.listen(8000);
const io = require('socket.io')(server);

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname, + "/static"));
app.use(session({ secret: "dontaskitllbeawasteofyourtime", resave: true, saveUninitialized: false, cookie: { masAge: 60000 }}));

io.on('connection', function (socket) {
	var random_number = Math.floor(Math.random() * 1000) + 1;
	socket.emit('greeting', {msg: "You emitted the following information to the server: ", num: random_number } );
});

app.get('/', function (request, response) {
	response.render('index');
});
app.post('/result', function (request, response) {
	response.render('results',  {info: request.body});
});