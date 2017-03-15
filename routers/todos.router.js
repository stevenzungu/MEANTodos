
var express = require('express');
var todosRouter = express.Router();
var Todos = require('../models/todos.model');



//GET /todos
todosRouter.get('/todos', function(req, res){
  Todos.find({}, function(err, documents){
    if(err){
      res.status(500).json({
        msg: err
      });

    } else {
      res.status(200).json({
        todos: documents
      });
    }
  });
});

//GET /todos/:id
todosRouter.get('/todos/:id', function(req, res){
  Todos.find({_id: req.params.id}, function(err, documents){
    if(err){
      res.status(500).json({
       msg: err
      });
    } else {
      res.status(200).json({
        todos: documents
      });
    }
  });
});



//POST /todos
todosRouter.post('/todos', function(req, res){
  var todos = new Todos(req.body);
  todos.save(function(err, document){
    if(err){
      res.status(500).json({
        msg: err
      });
    }  else{
      res.status(201).json({
        msg: "Successfully posted"
      });
      }
    });
});


//PUT /todos/:id
todosRouter.put('/todos/:id', function(req, res){
  Todos.findOneAndUpdate({_id: req.params.id}, req.body, function(err, document){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: "Successfully updated"
      });
    }
  });
});


//DELETE /todos/:id
todosRouter.delete('/todos/:id', function(req, res){
  Todos.remove({_id: req.params.id}, function(err, document){
    if(err){
      res.status(500).json({
        msg:err
      });
    } else {
      res.status(200).json({
        msg: "Successfully delete"
      });
    }
  });
});

module.exports = todosRouter;
