const Main = require('./main.component');

const moduleName = 'main.component-bundle',
      dependencies = [ Main ];

angular.module(moduleName, dependencies);

module.exports = moduleName;