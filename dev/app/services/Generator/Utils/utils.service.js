utils.$inject = [];

function utils () {
	const service = {
		getModuleData: getModuleData,
		toInjectionDependencies: toInjectionDependencies
	};

	return service;

	function getModuleData (type, data) {
		let moduleData = {
			moduleName: '',
			dependencies: [],
			moduleVars: '',
			moduleRegistries: ''
		};

		switch (type) {
			case 'app':
				getAppModuleData(data, moduleData);
				break;
			case 'app.components':
			case 'app.services':
			case 'app.shared':
				getOtherAppModuleData(type, data, moduleData, type.slice(type.indexOf('.')+1));
				break;
		}

		return moduleData;
	}

	function getAppModuleData (appData, moduleData) {
		moduleData.moduleName = appData.moduleName;
		moduleData.fileName = 'app.module.js';
		moduleData.dependencies = toInjectionDependencies(appData.dependencies);

		if (appData.createConfig) {
			moduleData.moduleVars += "const config = require('./app.config');\n";
			moduleData.moduleRegistries += "\n\t.config(config)";
		}
			
		if (appData.createRun) {
			moduleData.moduleVars += "const run = require('./app.run');\n";
			moduleData.moduleRegistries += "\n\t.run(run)";
		}

		if (appData.components.length > 0) {
			moduleData.moduleVars += `const components = require('./app.components');\n`;
			moduleData.dependencies.push('components');
		}

		if (appData.services.length > 0) {
			moduleData.moduleVars += `const services = require('./app.services');\n`;
			moduleData.dependencies.push('services');
		}

		if (appData.shared.length > 0) {
			moduleData.moduleVars += `const shared = require('./app.shared');\n`;
			moduleData.dependencies.push('shared');
		}

	}

	function getOtherAppModuleData (moduleName, data, moduleData, type) {
		moduleData.moduleName = moduleName;
		moduleData.fileName = moduleName + '.js';

		for (let i = 0; i < data.length; i++) {
			const dt = data[i];
			const path = `./${type}/${dt.name}${getRelativeRequirePath(dt.path)}`;
			moduleData.moduleVars += `const ${dt.name} = require('${path}');\n`;
			moduleData.dependencies.push(dt.name);
		}

	}

	function toInjectionDependencies (dependencies) {
		let injectionDependencies = [];

		for (let i = 0; i < dependencies.length; i++)
			injectionDependencies.push(`'${dependencies[i]}'`);

		return injectionDependencies;
	}

	function getArrayFromProp (arr, prop) {
		let newArr = [];

		for (let i = 0; i < arr.length; i++)
			newArr.push(arr[i][prop]);

		return newArr;
	}

	function getRelativeRequirePath (path) {
		return `${path.slice(path.lastIndexOf('/'))}`;
	}

}

module.exports = { name: 'utils', srvc: utils };