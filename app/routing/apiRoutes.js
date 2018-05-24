// A GET route with the url /api/friends to display a JSON of all possible friends.
// A POST routes /api/friends to handle incoming survey results and compatibility logic.

// Dependencies
var friendsData = require ('../data/friends.js');

// ROUTING
module.exports = function (app) {
	app.get('/api/friends', function(req, res) {
		res.json(friendsData);
	});


	app.post('/api/friends', function(req, res){
			friendsData.push(req.body);
			res.json(true);
	});

}