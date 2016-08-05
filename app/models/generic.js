var mongoose = require('mongoose');

var schemaGeneric = mongoose.Schema({
	generic: {
		type: Boolean,
		default: true
	}
})

module.exports = mongoose.model('Generic', schemaGeneric);