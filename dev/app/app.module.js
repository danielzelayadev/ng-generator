const components = require("./app.components"),
	  config     = require("./app.config"),
      run        = require("./app.run"),
      services   = require("./app.services"),
      shared     = require("./app.shared");

const dependencies = [ 'ui.router', 'ngMessages', 'ngMaterial', components, services, shared ];

angular.module('ngGenerator', dependencies)
	.config(config)
	.run(run);