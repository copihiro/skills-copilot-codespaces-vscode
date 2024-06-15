// Create web server
// 1. Load the http module to create an http server.
var http = require('http');
var fs = require('fs');

// 2. Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
    console.log(request.url);
    var url = request.url;
    var fileName = url.substring(1);
    console.log(fileName);
    if (url == '/') {
        fileName = 'index.html';
    }
    if (url == '/comments') {
        fileName = 'comments.json';
    }
    fs.readFile(fileName, function (err, data) {
        if (err) {
            response.writeHead(404, {
                'Content-Type': 'text/html'
            });
            return response.end("404 Not Found");
        }
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        response.write(data);
        return response.end();
    });
});

// 3. Listen on port 8000, IP defaults to
