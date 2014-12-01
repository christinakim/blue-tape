(function($) {

	var endpoint = {
		// enter watson host name; e.g: 'http://www.myhost.com'
		host : 'https://watson-wdc01.ihost.com/instance/504/',

	    // enter watson instance name; e.g: '/deepqa/v1/question'
	    instance : 'deepqa/v1/question',
	    
	    // enter authentication info; e.g: 'Basic c29tZXVzZXJpZDpzb21lcGFzc3dvcmQ='
   		auth : 'Basic bnd1X3N0dWRlbnQyOTpjSzRIalYzbA=='
	};

	var uri = endpoint.host + endpoint.instance;

	$('#submitButton').click(function(event) {
		console.log('POSTing now.');
		var questionEntity = {
	        "question" : {
	            "evidenceRequest" : { // Ask Watson to return evidence
	                "items" : 5 // Ask for 5 answers with evidence
	            },
	            "questionText" : $('#question').val() // The question
	        }
	    };

		$.ajax({
			url: uri,
			method: 'POST',
			crossDomain: true,
			dataType: 'json',
			headers : {
				'Access-Control-Allow-Origin': '*',
	        	'Accept': 'application/json',
	            'Content-Type' : 'application/json',
	            'X-SyncTimeout' : 30,
	            'Authorization' : endpoint.auth
	        },
	        data: questionEntity
		}).done(function(data) {
			console.log(data);
		});


	});
	
	


})($);