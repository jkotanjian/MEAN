var http = require("http");
var fs = require("fs");
var server = http.createServer(function (request, response) {
	
	const splitURL = request.url.split('/'),
		fileType = splitURL[1],
		file = splitURL[2];

	switch (fileType) {
		case "styles":
			serveCSS(file, response);
			break;
		case "images":
			serveJPG(file, response);
			break;
		default:
			switch(fileType) {
				case "cars":
					if (file === "new") {
						serveHTML("new_car.html", response);
					}
					else {
						serveHTML("cars.html", response);
					}
					break;

				case "cats":
					serveHTML("cats.html", response);
					break;
				default:
					serve404(response);	
			}
	}
});	
function serveHTML (filename, response) {
	fs.readFile(`views/${filename}`, 'utf8', function (errors, contents) {
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(contents);
		response.end();
	});
}
function serveCSS (filename, response) {
    fs.readFile(`stylesheets/${filename}`, 'utf8', function (errors, contents){
		response.writeHead(200, {'Content-type': 'text/css'});
        response.write(contents); 
        response.end();
    });
}
function serveJPG (filename, response) {
	fs.readFile(`images/${filename}`, function (errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents); 
        response.end();
    });
}
function serve404 (response) {
	response.writeHead(404);
	response.end("File not found!!!");
}
server.listen(7077);
console.log("Running in localhost at port 7077");