var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

const server = app.listen(8000);

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname, + "/static"));

mongoose.connect('mongodb://localhost/pupper_doggo');

var PupperSchema = new mongoose.Schema ({
	name: {type: String, minlength: 1},
	age: {type: Number, minlength: 1},
	weight: {type: String, minlength: 1},
	activity: {type: String, minlength: 5},
}, {timestamps: true});

var Pupper = mongoose.model('Pupper', PupperSchema);

var error = "something went wrong";

app.get('/', function (request, response) {
	Pupper.find({}).sort('-createdAt').exec(function (error, puppers) {
		response.render('index', {puppers: puppers});
	});
});

app.get('/puppers/new', function (request, response) {
	response.render('new');
})

app.post('/puppers', function (request, response) {
	var pupper = new Pupper({name: request.body.name, age: request.body.age, weight: request.body.weight, activity: request.body.activity});
	pupper.save (function (error) {
		if (error) { console.log(error); }
		else { console.log('successfully added a pupper!');	}
		response.redirect('/');
	});
});

app.get('/:id', function (request, response) {
	Pupper.findOne({_id: request.params.id}, function (error, puppers) {
		if (error) { console.log(error); }
		else { console.log('successfully got the pupper!');	}
		response.render('show', {puppers: puppers})
	});
});

app.post('/:id', function (request, response) {
	Pupper.update({_id: request.params.id}, request.body, function (error, puppers) {
		if (error) { console.log(error); }
		else { console.log('successfully updated the pupper!');	}
		response.redirect('/');
	});
});

app.get('/:id/edit', function (request, response) {
	Pupper.findOne({_id: request.params.id}, request.body, function (error, puppers) {
		if (error) { console.log(error); }
		else { console.log('successfully found the pupper!'); }
		response.render('edit', {puppers: puppers});
	});
});

app.get('/:id/destroy', function (request, response) {
	Pupper.remove({_id: request.params.id}, function (error) {
		if (error) { console.log(error); }
		else { console.log('successfully deleted the pupper!');	}
		response.redirect('/');
	});
});