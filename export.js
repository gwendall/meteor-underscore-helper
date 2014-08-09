UI.registerHelper('_', function() {
	arguments = _.toArray(arguments);
	var self = this,
		fn = arguments[0];
	arguments.shift();
	arguments.pop();
	return _[fn].apply(self, arguments);
});