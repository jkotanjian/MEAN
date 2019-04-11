const express = require('express');
const mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.set('views', path.join(__dirname + '/client/views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname, + '/client/static'));

app.listen(8000, function() {
	console.log('listening on port 8000');
});

require('./server/config/routes.js')(app);