const service = require("./generator.service");

const moduleName   = 'generator',
      dependencies = [];

angular.module(moduleName, dependencies)
	.factory(service.name, service.srvc);

module.exports = moduleName;