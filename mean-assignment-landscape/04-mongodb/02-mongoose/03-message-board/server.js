var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

const server = app.listen(8000);

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname, + "/static"));

mongoose.connect('mongodb://localhost/dojo_message_board');

var MessageSchema = new mongoose.Schema ({
	name: {type: String, minlength: 1},
	message: {type: String, minlength: 5},
	comments: {type: [CommentSchema]},
}, {timestamps: true});

var CommentSchema = new mongoose.Schema ({
	name: {type: String, minlength: 1},
	comment: {type: String, minlength: 5},
}, {timestamp: true});

var Message = mongoose.model('Message', MessageSchema);
var Comment = mongoose.model('Comment', CommentSchema);

var error = "something went wrong";

app.get('/', function (request, response) {
	Message.find({}).sort('-createdAt').exec(function (error, messages) {
		response.render('index', {messages: messages});
	});
});

app.post('/messages', function (request, response) {
	var message = new Message({name: request.body.name, message: request.body.message});
	message.save (function (error) {
		if (error) { console.log(error); }
		else { console.log('successfully added a message!'); }
		response.redirect('/');
	});
});

app.post('/comments/:id', function (request, response) {
	var comment = new Comment({name: request.body.name, comment: request.body.comment});
	Message.updateOne({_id: request.params.id}, {$push: {comments: comment}}, function (error, messages) {
		if (error) { console.log(error); }
		else { console.log('successfully added a comment!'); }
		response.redirect('/');
	});
});