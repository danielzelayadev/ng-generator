"use strict";

let moduleName = "",
	dependencies = [];

process.argv.forEach((val, index, array) => {
  const MODULE_NAME_INDEX = 2,
  		DEPENDENCIES_START_INDEX = 3;

  if (index == MODULE_NAME_INDEX)
  	moduleName = val;
  else if (index >= DEPENDENCIES_START_INDEX)
  	dependencies.push(`'${val}'`);
});

console.log(`"use strict";

let moduleName = "${moduleName}";

angular.module(moduleName, [${dependencies}]);

module.exports = moduleName;
`);