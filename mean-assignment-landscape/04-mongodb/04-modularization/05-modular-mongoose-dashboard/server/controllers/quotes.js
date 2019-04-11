const Pupper = require('../models/quotes.js');

module.exports = {
	view_puppers: (request, response) => {
		Pupper.find({}).sort('-createdAt')
		.then(pupper => {
			response.render('index', {pupper});
		})
		.catch(err => {
			console.log(err);
		});
	},
	create_puppers: (request, response) => {
		Pupper.create(request.body)
		.then(() => {
			response.redirect('/')
		})
		.catch(err => {
			console.log(err);
		});
	},
	get_puppers: (request, response) => {
		Pupper.findOne({_id: request.params.id})
		.then(pupper => {
			response.render('show', {pupper});
		})
		.catch(err => {
			console.log(err);
		})
	},
	update_puppers: (request, response) => {
		Pupper.update({_id: request.params.id}, request.body)
		.then(pupper => {
			response.redirect('/');
		})
		.catch(err => {
			console.log(err);
		})
	},
	edit_puppers: (request, response) => {
		Pupper.findOne({_id: request.params.id}, request.body)
		.then(pupper => {
			response.render('edit', {pupper});
		})
		.catch(err => {
			console.log(err);
		})
	},
	delete_puppers: (request, response) => {
		Pupper.deleteOne({_id: request.params.id})
		.then(pupper => {
			response.redirect('/');
		})
		.catch(err => {
			console.log(err);
		})
	},
};