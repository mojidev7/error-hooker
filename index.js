const { config, applyConfigs } = require('./src/config');
const log = require('./src/log');

/**
 * Start error hooker
 * @param {config} options
 */
const start = options => {
	applyConfigs(options);
	console.log('ErrorHooker started successfully!');

	config.express.app.use((err, req, res, next) => {
		let [httpCode, status, error] = err;
		if (typeof httpCode !== 'number') {
			httpCode = 500;
		}

		if (err) {
			log(httpCode, status, error);
		}
		if (config.express.sendResponse) {
			return res.status(httpCode).json({
				status: status,
				error: error,
			});
		}
		next();
	});
};

const errorHooker = {
	start,
};

module.exports = errorHooker;
