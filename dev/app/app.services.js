const genUtils   = require('./services/GenUtils/gen-utils.module'),
	  moduleMeta = require('./services/ModuleMeta/module-meta.module'),
	  generator  = require('./services/Generator/generator.module');

const moduleName   = 'app.services',
      dependencies = [ genUtils, moduleMeta, generator ];

angular.module(moduleName, dependencies);

module.exports = moduleName;