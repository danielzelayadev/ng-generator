const genUtils = require('./services/GenUtils/gen-utils.module');

const moduleName   = 'app.services',
      dependencies = [ genUtils ];

angular.module(moduleName, dependencies);

module.exports = moduleName;