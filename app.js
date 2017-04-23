var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {res.status(200).send('whatup'); });

app.listen(port, function(){
	console.log('listening on port ' + port);
});

app.post('/hello', function(req, res, next) {
	var userName = req.body.user_name;
	var botPayload = {
		text: "Even during times of extreme struggle, these 3 months in WDI have been a lot of fun, and I couldn't have asked for a better cohort to share this experience with. You're all amazing, and talented, and I'm excited to see where you end up next (except for Ben, as he will assuredly lose contact with us all by mid-to-late September). May Jibbers be with you always, " + userName + ". - Dave"
	};

	if (userName !== 'slackbot') {
		return res.status(200).json(botPayload);
	} else {
		return res.status(200).end();
	}
});