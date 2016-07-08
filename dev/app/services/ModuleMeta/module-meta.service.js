moduleMeta.$injects = [];

function moduleMeta () {
	const service = {
		get: get
	};

	return service;

	function get (path) {
		console.log(fs.readFileSync(path, { encoding: 'utf-8' }));
		return undefined;
	}
}

module.exports = { name: 'moduleMeta', srvc: moduleMeta };