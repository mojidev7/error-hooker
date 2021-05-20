const config = {
	express: {
		app: null,
		sendResponse: false,
	},
	file: {
		active: false,
		path: 'errors.log',
	},
	discord: {
		active: false,
		hookUrl: '',
	},
	console: {
		active: false,
		logger: console,
	},
};

/**
 * Apply configs into config object
 * @param {config} options
 */
function applyConfigs(options) {
	if (!options?.express?.app) {
		throw Error('An instance of express.app is required');
	}
	config.express.app = options.express.app;
	config.express.sendResponse = options?.express?.sendResponse ?? config.express.sendResponse;

	config.file.active = options?.file?.active ?? config.file.active;
	config.file.path = options?.file?.path ?? config.file.path;
	if (config.file.active && config.file.path == '') {
		throw Error('Proper filepath is required');
	}

	config.discord.active = options?.discord?.active ?? config.discord.active;
	config.discord.hookUrl = options?.discord?.hookUrl ?? config.discord.hookUrl;
	if (config.discord.active && config.discord.hookUrl == '') {
		throw Error('Proper Discord hook url is required');
	}

	config.console.active = options?.console?.active ?? config.console.active;
	// TODO: check if proper logger instance is provided
	// A proper logger is an object containing necessary methods: log, warn, error, info, debug
	config.console.logger = options?.console?.logger ?? config.console.logger;
}

module.exports = {
	config,
	applyConfigs,
};
