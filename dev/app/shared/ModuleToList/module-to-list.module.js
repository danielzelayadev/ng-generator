const directive  = require('./module-to-list.directive'),
      controller = require('./module-to-list.controller');

const moduleName   = 'moduleToList.module',
      dependencies = [];

angular.module(moduleName, dependencies)
    .controller(controller.name, controller.ctrl)
	.directive(directive.name, directive.drtv);

module.exports = moduleName;