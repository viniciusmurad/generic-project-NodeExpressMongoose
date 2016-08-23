var express = require('express'),
	consign = require('consign'),
	bodyParser = require('body-parser'),
	app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.send('working..');
})

consign()
	.include('app/models')
	.then('app/controllers')
	.then('app/routes')
	.into(app);

module.exports = app;
