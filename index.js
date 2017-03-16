var express = require('express');
var server = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var todoRouter = require('./routers/todo.router');

var port = process.env.PORT || 8080;
var mongoURI = process.env.MONGOURI || require('./secrets').MONGOURI;

//powerup -- middleware
server.use(express.static(__dirname + '/public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));


//connect to the database
mongoose.connect(mongoURI);

//Routers
server.use(todoRouter);


server.get('/', function(req, res){
  res.sendFile('index.html', {root: __dirname + '/public/html'});
});



server.listen(port, function(){
  console.log('Now listening on port...', port);
});
