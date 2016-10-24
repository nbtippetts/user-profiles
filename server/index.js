  var express = require('express');
  var bodyParser = require('body-parser');
  var session = require('express-session');
  var cors = require('cors');
  var profileCtrl = require('./controllers/profileCtrl');
  var userCtrl = require('./controllers/userCtrl');
  var config = require('./server_config');
  var port = 8738;
  var app = express();


  var corsOptions = {
    origin: 'http://localhost:8738'
  };

  app.use(bodyParser.json());

  app.use(cors('corsOptions'));

  app.use(session({
    secret: config.sessionSecret,
    saveUninitialized: false,
    resave: false
  }));

  app.use(express.static(__dirname + '/public'));
  console.log('this is dirname', __dirname)


  app.post('/api/login', userCtrl.login);
  console.log('this is login', app.post)

  app.get('/api/profiles', profileCtrl.getFriends);






  app.listen(port, function(){
    console.log("Listeing on port ", port);
  });
