Package.describe({
	summary: "Underscore functions directly available in templates"
});

Package.on_use(function (api, where) {
	if (api.export) {
		api.use([
			'ui',
			'underscore'
		], 'client');
	}
	api.add_files('export.js', 'client');
});