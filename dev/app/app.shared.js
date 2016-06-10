const textToList   = require('./shared/TextToList/text-to-list.module'),
      moduleToList = require('./shared/ModuleToList/module-to-list.module');

const moduleName   = 'app.shared',
      dependencies = [ textToList, moduleToList ];

angular.module(moduleName, dependencies);

module.exports = moduleName;