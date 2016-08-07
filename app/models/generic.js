var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schemaGeneric = new Schema({
	generic: {
		type: Boolean,
		default: true
	}
})

module.exports = mongoose.model('Generic', schemaGeneric);