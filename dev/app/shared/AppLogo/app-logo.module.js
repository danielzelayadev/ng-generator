const directive = require('./app-logo.directive');

const moduleName = 'app-logo.shared',
      dependencies = [];

angular.module(moduleName, dependencies)
	.directive(directive.name, directive.drtv);;

module.exports = moduleName;