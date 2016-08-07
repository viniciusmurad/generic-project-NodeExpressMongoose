var mongoose = require('mongoose');
var api = {};
var Model = mongoose.model('Generic');

api.getAll = function(req, res) {
	Model.find(function(err, results) {
		if(err) {
			res.status(500).json(error);
			console.log(err);
		}
		res.json(results);
		console.log(results);
	})
}

api.getById = function(req, res) {
	Model.findById(req.params.id, function(err, results) {
		if (err) {
			res.status(500).json(err);
			console.log(err);
		} else {
			res.json(results);
			console.log(results);
		}
	})
}

api.addItem = function(req, res) {
	var newItem = new Model(req.body);
	newItem.save(function(err, results) {
		if (err) {
			res.status(500).json(err);
			console.log(err);
		}
		res.json(results);
		console.log(results);
	})
}

api.updateItem = function(req, res) {
	Model.findByIdAndUpdate(req.params.id, req.body, function(err, results) {
		if (err) {
			res.status(500).json(err);
			console.log(err);
		} else {
			res.json(results);
			console.log(results);
		}
	})
}

api.deleteItem = function(req, res) {
	Model.findByIdAndRemove(req.params.id, function(err, results) {
		if(err) {
			res.status(500).json(err);
			console.log(err);
		} else {
			res.json(results);
			console.log(results);
		}
	})
}


module.exports = api;