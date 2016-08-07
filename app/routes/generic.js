module.exports = function(app) {
	var api = app.app.controllers.generic;

	app.route('/generic')
		.get(api.getAll)
		.post(api.addItem);
		
	app.route('/generic/:id')
		.get(api.getById)
		.delete(api.deleteItem)
		.put(api.updateItem);

}

