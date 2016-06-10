const textToList = require('./shared/TextToList/text-to-list.module');

const moduleName   = 'app.shared',
      dependencies = [ textToList ];

angular.module(moduleName, dependencies);

module.exports = moduleName;