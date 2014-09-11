Package.describe({
	summary: "Underscore functions directly available in templates",
  version: "0.1.1",
  git: "https://github.com/pahans/meteor-underscore-helper",
  name: "gwendall:underscore-helper"
});

Package.on_use(function (api, where) {
	if (api.export) {
    if(api.versionsFrom){
      api.versionsFrom("METEOR@0.9.0")
    }
		api.use([
			'ui',
			'underscore'
		], 'client');
	}
	api.add_files('export.js', 'client');
});