var express = require("express");

var app = express();

app.get('/', function(request, response) {
});
app.get('/cars', function (request, response) {
});
app.get('/cats', function (request, response) {
});
app.get('/form', function (request, response) {
});

app.use(express.static(__dirname + "/static"));

app.listen(8000, function() {
	console.log("Listening on port 8000");
})