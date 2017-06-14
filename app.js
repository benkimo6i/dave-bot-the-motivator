var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {res.status(200).send('whatup'); });

app.listen(port, function(){
	console.log('listening on port ' + port);
});

app.post('/keywords', function(req, res, next) {
	var userName = req.body.user_name;
	var keyword = req.body.trigger_word;

	if (keyword == 'dave') {
		var botPayload = {
			text: "Hey " + userName + " keep being awesome. - Dave"
		}
	} else if (keyword == 'cohort') {
		var botPayload = {
			text: "The Best Cohort Ever! Hope you guys the best!!"
		}
	}

	if (userName !== 'slackbot') {
		return res.status(200).json(botPayload);
	} else {
		return res.status(200).end();
	}
});