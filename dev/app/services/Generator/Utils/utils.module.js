const service = require("./utils.service");

const moduleName   = 'utils',
      dependencies = [];

angular.module(moduleName, dependencies)
	.factory(service.name, service.srvc);

module.exports = moduleName;