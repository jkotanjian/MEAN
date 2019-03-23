var express = require("express");

var app = express();

var cats_data = [
	{name: "Noodle", toy: "Ball of Yarn", age: 1, seen: "In the tub", img: "/images/cat1.jpg"},
	{name: "Zippy", toy: "Anything that sounds like a bell", age: 2, seen: "In a basket - any basket", img: "/images/cat2.jpg"},
	{name: "Stache", toy: "Toilet Paper", age: 4, seen: "In the bathroom sink", img: "/images/cat3.jpg"},
	{name: "Twinkles", toy: "Scratching Post", age: 1, seen: "Sitting in all the laps", img: "/images/cat4.jpg"},
];

app.get('/', function(request, response) {
	response.render('index');
});
app.get('/cats', function (request, response) {
	response.render('cats');
});
app.get('/noodle', function (request, response) {
	response.render('details', {cats: cats_data[0]});
});
app.get('/zippy', function (request, response) {
	response.render('details', {cats: cats_data[1]});
});
app.get('/stache', function (request, response) {
	response.render('details', {cats: cats_data[2]});
});
app.get('/twinkles', function (request, response) {
	response.render('details', {cats: cats_data[3]});
});

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.listen(8000, function() {
	console.log("Listening on port 8000");
})