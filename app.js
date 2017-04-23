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
		text: 'Just do it, ' + userName
	};

	if (userName !== 'slackbot') {
		return res.status(200).json(botPayload);
	} else {
		return res.status(200).end();
	}
});