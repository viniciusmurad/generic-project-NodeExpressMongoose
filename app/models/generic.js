var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var schemaGeneric = new Schema({
	generic: {
		type: Boolean,
		default: true
	}
})

module.exports = mongoose.model('Test', schemaGeneric);

