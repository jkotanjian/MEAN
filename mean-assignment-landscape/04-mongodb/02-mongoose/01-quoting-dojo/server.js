var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

const server = app.listen(8000);

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname, + "/static"));

mongoose.connect('mongodb://localhost/quoting_dojo');

var UserSchema = new mongoose.Schema ({
	name: String,
	quote: String,
}, {timestamps: true});

var User = mongoose.model('User', UserSchema);

app.get('/', function (request, response) {
	response.render('index');
});

app.post('/quotes', function (request, response) {
	var user = new User({name: request.body.name, quote: request.body.quote});
	user.save(function (error) {
		if (error) {
			console.log('something went wrong');
		}
		else {
			console.log('successfully added a user!');
		}
		response.redirect('/quotes');
	});
});	

app.get('/quotes', function (request, response) {
	User.find({}).sort('-createdAt').exec(function (error, users) {
		response.render('quotes', {users: users});
	});
});