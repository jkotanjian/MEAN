const express = require('express');
const mongoose = require('mongoose');

var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8000, () => {
	console.log('listening on port 8000');
});

require('./server/config/routes.js')(app);