var expect = require("chai").expect;
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test'); 

describe('Generic tests', function() {
	
	it('#get all items', function() {
		genericList = [];
		expect(genericList.length).to.be.at.least(1);
	})

})