
var mongoose = require('mongoose');

//Create the mongoose Schema
var todoSchema = mongoose.Schema({
completed: {
  type: Boolean,
  default: false
},
description: {
  type: String,
  required: true,
}
});

//Create the Mongoose Model
var Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
