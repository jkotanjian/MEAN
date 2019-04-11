const pupper = require('../controllers/quotes.js');

module.exports = (app) => {

	app.get('/', (request, response) => {
		pupper.view_puppers(request, response);
	});

	app.get('/puppers/new', (request, response) => {
		response.render('new');
	});

	app.post('/puppers', (request, response) => {
		pupper.create_puppers(request, response);
	});

	app.get('/:id', (request, response) => {
		pupper.get_puppers(request, response);
	});

	app.post('/:id', (request, response) => {
		pupper.update_puppers(request, response);
	})

	app.get('/:id/edit', (request, response) => {
		pupper.edit_puppers(request, response);
	});

	app.get('/:id/destroy', (request, response) => {
		pupper.delete_puppers(request, response);
	});
};