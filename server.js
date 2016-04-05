var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');

// // configuration /////////////////////////////

var port = process.env.PORT || 8090;

var mongoURI = process.env.MONGOLAB_URI || 'mongodb://localhost/scratchdb';
mongoose.connect(mongoURI);

app.use(express.static(__dirname + '/public')); // set the static files location
app.use(morgan('dev'));                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));



var Resto = mongoose.model('Resto', {
    name: String,
    rating: Number,
    review: String
  
});

// routes ////////////

app.get('/api/restos', function(req, res) {
  Resto.find(function(err, menus) {
    if(err)
      res.send(err)
    
    res.json(restos)
  })
})

  // create restaurant and send back all restos after creation
  app.post('/api/restos', function(req, res) {

      // create a Resto, information comes from AJAX request from Angular
      Resto.create({
          text : req.body.text,
          done : false
      }, function(err, resto) {
          if (err)
              res.send(err);

          // get and return all the restos after you create another
          Resto.find(function(err, restos) {
              if (err)
                  res.send(err)
              res.json(restos);
          });
      });

  });

  // delete a restaurant
  app.delete('/api/restos/:resto_id', function(req, res) {
      Resto.remove({
          _id : req.params.resto_id
      }, function(err, resto) {
          if (err)
              res.send(err);

          // get and return all the restos after you create another
          Resto.find(function(err, restos) {
              if (err)
                  res.send(err)
              res.json(restos);
          });
      });
  });

// server.js
    // application -------------------------------------------------------------
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

// listen ////////////////////////////////////

app.listen(port, function() {
  console.log("Example app listening at : " + port);
})


// // routes ////////////

// app.get('/api/menus', function(req, res) {
//   Menu.find(function(err, menus) {
//     if(err)
//       res.send(err)
    
//     res.json(menus)
//   })
// })


// var http = require('http');


// var port = process.env.PORT || 8090;

// var server = http.createServer(function (request, response) {
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.end("Well it's a start!\n");
// });

// server.listen(port);

// module.exports = app;


