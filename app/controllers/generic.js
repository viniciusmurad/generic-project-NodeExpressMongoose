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


// api.getAll = function(req, res) {
// 	model.find({})
// 		.exec(function (err, result) {
// 			if(err) {
// 				console.log(err);
// 			} else {
// 				console.log(result);
// 				res.json(result);
// 			}
// 		})
// }

// api.addItem = function(req, res) {
// 	model.save(req.body)
// 		.then(function (result) {
// 			res.json(result);
// 		}, function(error) {
// 			console.log(error);
// 			res.status(500).json(error);
// 		})
// }

// api.getAll = function(req, res) {
// 	model.find({})
// 		.then(function (result) {
// 			res.json(result);
// 		}, function (error) {
// 			console.log(error);
// 			res.status(500).json(error);
// 		})
// }

module.exports = api;