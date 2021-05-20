const { getLogFile, getDiscordLogHook, getDiscordHookUrl, getConsole } = require('../config');
const logFile = require('./file.log');
const logHook = require('./discord.hook.log');

const log = (code, status, error) => {

    const errStr = `
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

    if (getLogFile()) {
        logFile(errStr);
    } 

    if (getDiscordLogHook()) {
        logHook(errStr, getDiscordHookUrl());
    }

    if (getConsole()) {
        console.log(errStr);
    }
}

module.exports = log;