const Main         = require('./main.module'),
	  NewApp       = require('./NewApplication/new-application.module'),
	  NewComponent = require('./NewComponent/new-component.module'),
	  NewService   = require('./NewService/new-service.module'),
	  NewShared    = require('./NewSharedModule/new-shared.module');

const moduleName = 'main-bundle',
      dependencies = [ Main, NewApp, NewComponent, NewService, NewShared ];

angular.module(moduleName, dependencies);

module.exports = moduleName;