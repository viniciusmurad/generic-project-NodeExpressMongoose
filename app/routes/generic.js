module.exports = function(app) {
	var api = app.app.controllers.generic;

	app.route('/generic')
		.get(api.getAll)
		.post(api.addItem);
		
	// app.route('/api/:id')
	// 	.get(api.getGenericId)
	// 	.delete(api.deleteGeneric)
	// 	.put(api.updateGeneric);

}

