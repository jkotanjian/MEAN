const people = require('../controllers/people.js');

module.exports = (app) => {

	app.get('/', (request, response) => {
		people.view_people(request, response);
	});

	app.get('/new/:name', (request, response) => {
		people.create_people(request, response);
	});

	app.get('/:name', (request, response) => {
		people.get_people(request, response);
	});

	app.get('/remove/:name', (request, response) => {
		people.delete_people(request, response);
	});
};