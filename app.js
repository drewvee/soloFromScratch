var express = require('express');
var partials = require('express-partials');

var app = express();

var port = process.env.PORT || 8090;

app.listen(port);


console.log('Server is listening on port' + port);