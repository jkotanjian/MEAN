const user = require('../controllers/quotes.js');

module.exports = (app) => {

	app.get('/', (request, response) => {
		response.render('index');
	});

	app.post('/quotes', (request, response) => {
		user.post_quotes(request, response);
		});

	app.get('/quotes', (request, response) => {
		user.get_quotes(request, response);
	});
};	