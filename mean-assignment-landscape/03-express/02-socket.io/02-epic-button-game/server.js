var express = require("express");
var bodyParser = require('body-parser');
var app = express();

var count = 0;

const server = app.listen(8000);
const io = require('socket.io')(server);

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname, + "/static"));

io.on('connection', function (socket) {
	socket.on('add', function(data) {
		count ++;
		io.emit('counter', {counter: count});
	});
	socket.on('reset', function(data) {
		count = 0;
		io.emit('counter', {counter: count});
	});
});

app.get('/', function (request, response) {
	response.render('index');
});