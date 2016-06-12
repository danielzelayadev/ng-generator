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
		let template = '';

		for (let i = 0; i < requires.length; i++)
			template += `require('${requires[i]}');\n`;

		template += "\nconst app = require('./app.module');\n\nangular.bootstrap(document, [ app ]);";

		try {
			fs.writeFile(`${dir}/app.bootstrap.js`, template);
		} catch (err) {
			throw "Failed to create app bootstrapper.";
		}
	}

	function createModule (dir, moduleData) {
		if (moduleData.moduleVars.length > 0)
			moduleData.moduleVars += '\n';

		const template = `${moduleData.moduleVars}const moduleName   = '${mdouleData.moduleName}',` +
		`\n\tdependencies = [${moduleData.dependencies}];` +
		`\n\nangular.module(moduleName, dependencies)${moduleData.moduleRegistries};`;

		try {
			fs.writeFileSync(`${dir}/${moduleData.fileName}`, template);
		}
		catch (err) {
			throw `Failed to create ${moduleData.moduleName}.`;
		}
	}

	function createConfig (dir, dependencies, type) {

	}

	function createRun (dir, dependencies) {

	}

	function createTemplate (dir, name) {

	}

	function createStylsheet (dir, name) {
		let template = name !== 'style.scss' ? `.${name} {\n\n}` : '';

		try {
			fs.writeFile(`${dir}/${name}`, template);
		} catch (err) {
			throw `Failed to create '${name}' stylesheet.`;
		}
	}

	function createController (dir, name, dependencies) {

	}

	function createService (dir, name, dependencies) {

	}

	function createDirective (dir, name, dependencies) {

	}

}

module.exports = { name: 'generator', srvc: generator };