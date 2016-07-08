const textToList   = require('./shared/TextToList/text-to-list.module'),
      moduleToList = require('./shared/ModuleToList/module-to-list.module'),
      appLogo      = require('./shared/AppLogo/app-logo.module');

const moduleName   = 'app.shared',
      dependencies = [ textToList, moduleToList, appLogo ];

angular.module(moduleName, dependencies);

module.exports = moduleName;