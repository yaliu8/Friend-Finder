//Dependencies
var path = require('path');

//ROUTING

// GET route that leads to home.html and displays the home page
module.exports = function(app){
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
};
