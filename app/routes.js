// app/routes.js

module.exports = function(app){

//// VIEWS -------------------------------------------------------------------
	// home page
	app.get('/', function(req, res) {
		res.render('index.html', {
			user : req.user
		});
	});

		app.get('/QA', function(req, res) {
		res.render('QA.html', {
			user : req.user
		});
	});

				app.get('/about', function(req, res) {
		res.render('index.html', {
			user : req.user
		});
	});

};

