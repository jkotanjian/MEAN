const User = require('../models/quotes.js');

module.exports = {
	post_quotes: (request, response) => {
		User.create(request.body)
		.then(() => {
			response.redirect('/quotes')
		})
		.catch(err => {
			console.log(err);
		})
	},
	get_quotes: (request, response) => {
		User.find({}).sort('-createdAt')
		.then(user => {
			response.render('quotes', {user});
		})
		.catch(err => {
			console.log(err);
		});
	}
};