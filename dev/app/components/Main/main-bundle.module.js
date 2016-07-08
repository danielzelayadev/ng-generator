const Main         = require('./main.module'),
	  NewApp       = require('./NewApplication/new-application.module'),
	  NewComponent = require('./NewComponent/new-component.module'),
	  NewService   = require('./NewService/new-service.module'),
	  NewShared    = require('./NewSharedModule/new-shared.module'),
	  Welcome      = require('./Welcome/welcome.module');

const moduleName = 'main-bundle',
      dependencies = [ Main, NewApp, NewComponent, NewService, NewShared, Welcome ];

angular.module(moduleName, dependencies);

module.exports = moduleName;