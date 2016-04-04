// var express = require('express');
// var partials = require('express-partials');
// var app = express();
var http = require('http');


var port = process.env.PORT || 8090;

var server = http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Well it's a start!\n");
});

server.listen(port);

