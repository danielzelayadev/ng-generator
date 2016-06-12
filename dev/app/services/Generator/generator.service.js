generator.$inject = [ 'utils' ];

function generator (utils) {
	const service = {
		createApp: createApp
	};

	return service;

	function createApp (appData) {
		createAppBootstrapper(appData.destinyFolder, appData.requires);
		createModule(appData.destinyFolder, utils.getModuleData('app', appData));
		createModule(appData.destinyFolder, utils.getModuleData('app.components', appData.components));
		createModule(appData.destinyFolder, utils.getModuleData('app.services', appData.services));
		createModule(appData.destinyFolder, utils.getModuleData('app.shared', appData.shared));
		if (appData.createConfig)
			createConfig(appData.destinyFolder, appData.configDependencies);
		if (appData.createRun)
			createRun(appData.destinyFolder, appData.runDependencies);
		if (appData.createGlobalStylesheet)
			createStylsheet(appData.destinyFolder, 'style.scss');
	}

	function createAppBootstrapper (dir, requires) {

	}

	function createModule (dir, moduleData) {
		if (moduleData.moduleVars.length > 0)
			moduleData.moduleVars += '\n';
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