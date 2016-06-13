const config     = require('./welcome.config'),
	  controller = require('./welcome.controller');

const moduleName = 'welcome.component',
      dependencies = [];

angular.module(moduleName, dependencies)
	.config(config)
	.controller(controller.name, controller.ctrl);

module.exports = moduleName;