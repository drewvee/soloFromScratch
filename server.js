// var express = require('express');
// var partials = require('express-partials');
// var app = express();


var http = require('http');


var port = process.env.PORT || 8090;

function handleRequest(req, res) {
  response.end('It Works. Path is : ' + req.url);
}

var server = http.createServer(handleRequest);

server.listen(port, function() {
  console.log('Server is listening on port ' + port);
});

