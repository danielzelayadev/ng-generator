const directive  = require('./text-to-list.directive'),
      controller = require('./text-to-list.controller');

const moduleName   = 'textToList.module',
      dependencies = [];

angular.module(moduleName, dependencies)
    .controller(controller.name, controller.ctrl)
	.directive(directive.name, directive.drtv);

module.exports = moduleName;