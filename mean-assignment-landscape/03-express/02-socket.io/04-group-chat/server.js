var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var users = [];
var messages = [];

const server = app.listen(8000);
const io = require('socket.io')(server);

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname, + "/static"));

function isUser(user) {
	for (var i = 0; i < users.length; i++) {
		if(user == users[i]) {
			return true;
		}
	}
	return false;
}

io.on('connection', function (socket) {
	socket.on('page_load', function(data) {
		const existingUser = isUser(data.user);
		const event = existingUser ? 'existing_user' : 'load_messages';
		const info = existingUser ? {alert: "This name is already in use. Refresh the page and enter another username."} : {current_user: data.user, messages: messages};
		
		if (!existingUser) {
			users.push(data.user);
		}
		socket.emit(event, info);
	});
	
	socket.on('new_message', function(data) {
		messages.push({name: data.user, message: data.message});
		io.emit('chat', {new_message: data.message, user: data.user});
	});

	socket.on('disconnect', function(data) {
		io.emit('disconnected', {msg: data.user});
	});
});

app.get('/', function (request, response) {
	response.render('index');
});