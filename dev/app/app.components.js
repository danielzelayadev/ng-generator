const moduleName = 'app.components';

const Main = require('./components/Main/main-bundle.module');

angular.module(moduleName, [ Main ]);

module.exports = moduleName;