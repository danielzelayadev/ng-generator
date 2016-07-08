const service = require("./module-meta.service");

const moduleName   = 'moduleMeta',
      dependencies = [];

angular.module(moduleName, dependencies)
	.factory(service.name, service.srvc);

module.exports = moduleName;