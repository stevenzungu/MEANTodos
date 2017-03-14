//required modules
var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var todoRouter = require('./routers/todo.router');
//constant values
var port = process.env.PORT || 8080;
var mongoURI = process.env.MONGOURI || require('./secrets').MONGOURI;
//connect to the database
mongoose.connect(mongoURI);
//wire up the middleware
server.use(express.static(__dirname + '/public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
//wire up the router
server.use(todoRouter);
//index.html file server
server.get('/', function(req, res){
  res.sendFile('index.html', {root: __dirname + '/public/html'});
});
//start up the server
server.listen(port, function(){
  console.log("Now listening on port...", port);
});
