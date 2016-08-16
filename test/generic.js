var express = require('../config/express')();
var request = require('supertest')(express);

describe('Generic tests', function() {
	it('#get all items', function(done) {
		request.get('/generic')
			.set('Accept', 'application/json')
			.expect('Content-Type',/json/)
			.expect(200, done);
	})
})