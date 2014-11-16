
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var request= require('request');

var app = express();

// all environments
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
 if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
}

// all environments
var app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

app.post('/question', function(req,res){

    res.contentType('application/json');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
  // Select healthcare as endpoint 
    var endpoint = {
    // enter watson host name; e.g: 'http://www.myhost.com'
    host : 'https://watson-wdc01.ihost.com/instance/504/WatsonApp/',
    
    // enter watson instance name; e.g: '/deepqa/v1/question'
    instance : 'deepqa/v1/question',
    
    // enter authentication info; e.g: 'Basic c29tZXVzZXJpZDpzb21lcGFzc3dvcmQ='
    auth : 'Basic bnd1X3N0dWRlbnQyOTpjSzRIalYzbA=='
};

// Handler for /question POST requests
// Submits a question to Watson via the IBM Watson QAAPI
// and returns the QAAPI response.
  if (!endpoint.host) {
    res.send(404, 'Watson host information not supplied.');
  }
    var uri = endpoint.host + endpoint.instance;
    //console.log(uri);
    
    // Form a proper Watson QAAPI request
// Sample input format
    var questionEntity=req.body;

    console.log(questionEntity);

    //console.log('Ask Watson: ' + questionEntity.question["questionText"]+ ' @ ' + uri);

    // Invoke the IBM Watson QAAPI Synchronously 
    // POST the questionEntity and handle the QAAPI response
    request.post({
        'uri' : uri,
        'headers' : {
            'Content-Type' : 'application/json;charset=utf-8',
            'X-SyncTimeout' : 30,
            'Authorization' : endpoint.auth
        },
        'json' : questionEntity,

    }, function(error, response, body) {
        // Return the QAAPI response in the entity body
        res.json(body);
    });

});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
