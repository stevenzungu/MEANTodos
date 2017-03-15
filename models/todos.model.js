
var mongoose = require('mongoose');

//Create the mongoose Schema
var todosSchema = mongoose.Schema({
  description: String,
  completed: Boolean
});

//Create the Mongoose Model
var Todos = mongoose.model('Todos', todosSchema);
module.exports = Todos;
