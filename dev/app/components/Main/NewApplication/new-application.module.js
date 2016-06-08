const config     = require('./new-application.config'),
	  controller = require('./new-application.controller');

const moduleName = 'new-app.component',
      dependencies = [];

angular.module(moduleName, dependencies)
	.config(config)
	.controller(controller.name, controller.ctrl);

module.exports = moduleName;