const generator  = require('./generator.module'),
      utils      = require('./Utils/utils.module');

const moduleName   = 'generator.bundle',
      dependencies = [ generator, utils ];

angular.module(moduleName, dependencies);

module.exports = moduleName;