const Task = require('../models/tasks.js');

module.exports = {
	view_task: (request, response) => {
		Task.find({})
		.then(task => {
			response.json(task);
		})
		.catch(err => {
			console.log(err);
		});
	},
	get_task: (request, response) => {
		Task.findOne({_id: request.params.id})
		.then(task => {
			response.json(task);
		})
		.catch(err => {
			console.log(err);
		})
	},
	create_task: (request, response) => {
		Task.create(request.body)
		.then(task => {
			response.json(task)
		})
		.catch(err => {
			console.log(err);
		});
	},
	update_task: (request, response) => {
		Task.update({_id: request.params.id}, request.body)
		.then(task => {
			response.json(task)
		})
		.catch(err => {
			console.log(err);
		})
	},
	delete_task: (request, response) => {
		Task.deleteOne({_id: request.params.id})
		.then(task => {
			response.json(task);
		})
		.catch(err => {
			console.log(err);
		})
	},
};