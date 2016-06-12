generator.$inject = [];

function generator () {
	const service = {
		createApp: createApp
	};

	return service;

	function createApp (appData) {
		
	}

	function createAppBootstrapper (dir, requires) {

	}

	function createModule (dir, moduleData, type) { 
	//moduleName, dependencies, moduleVars, moduleRegistries

	}

	function createConfig (dir, dependencies, type) {

	}

	function createRun (dir, dependencies) {

	}

	function createTemplate (dir, name) {

	}

	function createStylsheet (dir, name) {

	}

	function createController (dir, name, dependencies) {

	}

	function createService (dir, name, dependencies) {

	}

	function createDirective (dir, name, dependencies) {

	}

}

module.exports = { name: 'generator', srvc: generator };