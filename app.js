var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {res.status(200).send('whatup'); });

app.listen(port, function(){
	console.log('listening on port ' + port);
});

app.post('/dave', function(req, res, next) {
	var userName = req.body.user_name;
	var botPayload = {
		text: "Let me tell you something you already know. The world ain't all sunshine and rainbows. It is a very mean and nasty place and it will beat you to your knees and keep you there permanently if you let it. You, me, or nobody is gonna hit as hard as life. But it ain't how hard you hit; it's about how hard you can get hit, and keep moving forward. How much you can take, and keep moving forward. That's how winning is done. Now, if you know what you're worth, then go out and get what you're worth. But you gotta be willing to take the hit, and not pointing fingers saying you ain't where you are because of him, or her, or anybody. Cowards do that and that ain't you. You're better than that " + userName + ". - Dave"
	};

	if (userName !== 'slackbot') {
		return res.status(200).json(botPayload);
	} else {
		return res.status(200).end();
	}
});