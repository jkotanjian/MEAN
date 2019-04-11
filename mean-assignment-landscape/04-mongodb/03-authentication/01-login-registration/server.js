var express = require("express");
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('express-flash');
var app = express();
var bcrypt = require('bcrypt');
var mongoose = require('mongoose');

const server = app.listen(8000);

app.set('view engine', 'ejs');
app.set('trust proxy', 1);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session ({secret: 'imnottellinanyone', resave: false, saveUninitialized: true, cookie: {maxAge: 60000}}));
app.use(flash());
app.use(express.static(__dirname, + "/static"));

mongoose.connect('mongodb://localhost/login_registration');

var UserSchema = new mongoose.Schema ({
	first_name: {type: String, required: [true, 'First name must contain at least one character.'], minlength: 1},
	last_name: {type: String, required: [true, 'Last name must contain at least one character.'], minlength: 1},
	email: {type: String, validate: {isAsync: true, validator: (e, validate) => {User.find({email: e}, (err, email) => {validate(email.length === 0 && /^\w+@\w+[.]{1}[\w.]+$/.test(e), email.length !== 0 ? 'Email address is not available.' : `${e} is not a valid email address`); }); } }, required: [true, 'Email address cannot be blank.']},
	birthday: {type: Date, required: [true, 'Birthday cannot be blank.'], minlength: 6},
	password: {type: String, required: [true, 'Password must contain at least 8 characters.'], minlength: 8},
	confirm_password: {type: String, required: [true, 'Password must contain at least 8 characters.'], minlength: 8},
    }, { timestamps: true });

var User = mongoose.model('User', UserSchema);

app.get('/', function (request, response) {
	if (!request.session.user) {
		response.render('index');
	}
	else {
		response.redirect('/main');
	}
});

app.get('/main', function (request, response) {
	response.render('main', {session: session});
});

app.post('/login', function (request, response) {
	User.findOne({email: request.body.email}, function(err, user) {
		if (err) {
			for (let error in err.errors) {
				request.flash('errors', err.errors[errors].message);
			}
			response.redirect('/');	
		}
		if (user) {
			bcrypt.compare(request.body.password, user.password).then(result => {
				if (result) {
					request.session.user = user;
					session = request.session.user;
					response.redirect('/main');
				}
				else {
					request.flash('errors', 'Incorrect password entered.');
					return response.redirect('/');
				}
			})
			.catch(error => {
				request.flash('errors', 'Incorrect password entered.');
				response.redirect('/');
			})
		}
		else {
		request.flash('errors', 'No user found');
		response.redirect('/');
		}
	});
});				

app.post('/registration', function (request, response) {
	if (request.body.password === request.body.confirm_password) {
		var hash = bcrypt.hashSync(request.body.password, 10);
		var user = new User({first_name: request.body.first_name, last_name: request.body.last_name, email: request.body.email, birthday: request.body.birthday, password: hash});	
		user.save(function (err) {
			if (err) { 
				for (let error in err.errors) {
					request.flash('errors', err.errors[error].message);
				}
				response.redirect('/');
			}
			else { 
				request.flash('success', 'Successfully created user.');
				request.session.user = user;
				session = request.session.user;
				response.redirect('/main');
			}
		});
	}
	else {
		request.flash('errors', 'Passwords do not match');
		response.redirect('/');
	}	
});

app.get('/logout', function (request, response) {
	request.session.destroy();
	response.redirect('/');
});