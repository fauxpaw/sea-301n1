var express = require('express');
var app = express();
var config = require('./config')
var DB = config.DB;
var PORT = config.PORT;
var models = require('./models')

app.get('/route', function(req, res){
  res.json({hello: 'how are you'})
});

app.get('/cats', function(req, res){
  models.Cat.findAll().then(function(cats){
    res.json(cats);
  });
});


models.sequelize.sync({force: true}).then(function(x){
  //create rows here...
  models.Cat.create({
    name: 'Meowth',
    age: 2
  })
  console.log(x);
  app.listen(PORT, function(){
    console.log('server started');
    console.log('listening on PORT: '+ PORT);
    console.log('DB URI STRING: ' + DB);
  })
});
