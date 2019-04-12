const People = require('../models/people.js');

module.exports = {
	view_people: (request, response) => {
		People.find({})
		.then(people => {
			response.json(people);
		})
		.catch(err => {
			console.log(err);
		});
	},
	create_people: (request, response) => {
		People.create({name: request.params.name })
		.then((people) => {
			response.json(people)
		})
		.catch(err => {
			console.log(err);
		});
	},
	get_people: (request, response) => {
		People.findOne({name: request.params.name})
		.then(people => {
			response.json(people);
		})
		.catch(err => {
			console.log(err);
		})
	},
	delete_people: (request, response) => {
		People.deleteOne({name: request.params.name})
		.then(people => {
			response.json(people);
		})
		.catch(err => {
			console.log(err);
		})
	},
};