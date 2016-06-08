const config     = require('./new-shared.config'),
	  controller = require('./new-shared.controller');

const moduleName = 'new-shared.component',
      dependencies = [];

angular.module(moduleName, dependencies)
	.config(config)
	.controller(controller.name, controller.ctrl);

module.exports = moduleName;