var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var app = express();

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



