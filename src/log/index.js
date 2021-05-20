const { config } = require('../config');
const logFile = require('./file.log');
const discordLog = require('./discord.hook.log');

const log = (code, status, error) => {
	const errStrForDiscord = `
===========================================
STATUS: ${status}
----
HTTP_CODE: ${code.toString()}
----
ERROR: ${error.toString()}
----
DATE: ${new Date().toJSON()}
===========================================
`;

	const logForFileAndConsole = `${new Date().toJSON()} - ${status} - ${code.toString()} - ${error.toString()}`;
	if (config.file.active) {
		logFile(logForFileAndConsole, config.file.path);
	}

	if (config.discord.active) {
		discordLog(errStrForDiscord, config.discord.hookUrl);
	}

	if (config.console.active) {
		config.console.logger.error(logForFileAndConsole);
	}
};

module.exports = log;
