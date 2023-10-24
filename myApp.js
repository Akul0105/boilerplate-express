require('dotenv').config();
let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/now', 
function(req, res, next) { 
  req.time = new Date().toString() 
  next()
  },
(req, res) => res.send({"time" : req.time}))

  app.get('/:word/echo',
    function(req,res){
        res.json({echo: req.params.word})
    });

    app.get('/name', function(req,res){
        var name1 = req.query.first
        var name2 =  req.query.last
        res.json({name: name1 + ' ' + name2 })
    });



    app.post('/name', function(req,res){
      var name1 = req.body.first
      var name2 =  req.body.last
      res.json({name: name1 + ' ' + name2 })
  });

 module.exports = app;

