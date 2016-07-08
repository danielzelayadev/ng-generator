const service = require("./gen-utils.service");

const moduleName   = 'gen-utils',
      dependencies = [];

angular.module(moduleName, dependencies)
	.factory(service.name, service.srvc);

module.exports = moduleName;