const config     = require('./new-service.config'),
	  controller = require('./new-service.controller');

const moduleName = 'new-service.component',
      dependencies = [];

angular.module(moduleName, dependencies)
	.config(config)
	.controller(controller.name, controller.ctrl);

module.exports = moduleName;