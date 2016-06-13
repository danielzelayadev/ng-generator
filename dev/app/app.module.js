const components = require("./app.components"),
	  config     = require("./app.config"),
      services   = require("./app.services"),
      shared     = require("./app.shared");

const moduleName   = 'ngGenerator',
      dependencies = [ 'ui.router', 'ngMessages', 'ngMaterial', components, services, shared ];

angular.module(moduleName, dependencies)
	.config(config);

module.exports = moduleName;