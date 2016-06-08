const config     = require('./new-component.config'),
	  controller = require('./new-component.controller');

const moduleName = 'new-component.component',
      dependencies = [];

angular.module(moduleName, dependencies)
	.config(config)
	.controller(controller.name, controller.ctrl);

module.exports = moduleName;