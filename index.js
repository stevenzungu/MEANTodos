var express = require('express');
var server = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var todosRouter = require('./routers/todos.router');

var port = process.env.PORT || 8080;
var mongoURI = process.env.MONGOURI || require('./secrets').mongoURI;

//powerup -- middleware
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));


//connect to the database
mongoose.connect(mongoURI);

//Routers
server.use(todosRouter);


server.get('/', function(request, response){
  response.sendFile('index.html', {root: __dirname + '/public/html'});
});



server.listen(port, function(){
  console.log('Now listening on port...', port);
});
