var app = require('../config/express'),
	should = require('should'),
	request = require('supertest');

describe('Generic tests', function() {
	
	it('#get all items', function(done) {
		request(app)
			.get('/generic')
			.expect(200)
			.end(function (err, res) {
				res.status.should.equal(200);
			})
			done();
	})

	it('#add user', function(done) {
		request(app)
			.post('/generic')
			.send({generic: false})
			.expect(200)
			.end(function (err, res) {
				res.status.should.equal(200);
			})
			done();
	})
})