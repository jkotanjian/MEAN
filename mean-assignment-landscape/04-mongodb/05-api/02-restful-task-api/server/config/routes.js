const task = require('../controllers/tasks.js');

module.exports = (app) => {

	app.get('/', (request, response) => {
		task.view_task(request, response);
	});

	app.get('/:id', (request, response) => {
		task.get_task(request, response);
	});

	app.post('/', (request, response) => {
		task.create_task(request, response);
	});

	app.put('/:id', (request, response) => {
		task.update_task(request, response);
	});

	app.delete('/:id', (request, response) => {
		task.delete_task(request, response);
	});
};