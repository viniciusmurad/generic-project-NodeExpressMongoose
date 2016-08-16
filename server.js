var http = require('http'),
	app = require('./config/express');
require('./config/database')('localhost/generic');

var port = process.env.PORT || 3000;

http.createServer(app).listen(port, function() {
	console.log('gulp server running on port ' + port);
})