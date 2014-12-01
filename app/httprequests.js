// httprequests.js

var request = require('request');

var endpoint = {
// enter watson host name; e.g: 'http://www.myhost.com'
    host : 'https://watson-wdc01.ihost.com/instance/504/',
    
    // enter watson instance name; e.g: '/deepqa/v1/question'
    instance : 'deepqa/v1/question',
    
    // enter authentication info; e.g: 'Basic c29tZXVzZXJpZDpzb21lcGFzc3dvcmQ='
    auth : 'Basic bnd1X3N0dWRlbnQyOTpjSzRIalYzbA=='
};


exports.question = function(req, res) {
	if (!endpoint.host) {
		res.send(404, 'Watson host information not supplied.');
	}
    var uri = endpoint.host + endpoint.instance;

    var questionEntity = {
        "question" : {
            "evidenceRequest" : { // Ask Watson to return evidence
                "items" : 1 // Ask for 5 answers with evidence
            },
            "formattedAnswer": true,

            "questionText" : req.body.question // The question
        }
    };

    console.log('Ask Watson: ' + req.body.question + ' @ ' + uri);

    request({
        'uri' : uri,
        'method' : "POST",
        'headers' : {
        	'Accept': 'application/json',
            'Content-Type' : 'application/json',
            'X-SyncTimeout' : 30,
            'Authorization' : endpoint.auth
        },
        'json' : questionEntity,

    }, function(error, response, body) {
        // Return the QAAPI response in the entity body
        
        //res.json(body);
        // var ans = new EJS({url: 'questionSubmit.ejs'}).res.render('questionSubmit.html', body);
        res.render('questionSubmit.ejs', body);
    
    });
}