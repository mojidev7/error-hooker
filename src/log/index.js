const { getLogFile, getDiscordLogHook, getDiscordHookUrl } = require('../config');
const logFile = require('./file.log');
const logHook = require('./discord.hook.log');

const log = (title, message, err) => {

    const errStr = `
===========================================
title: ${title}
----
message: ${message}
----
error: ${err.toString()}
----
date: ${new Date().toJSON()}
===========================================
`;

    if (getLogFile) {
        logFile(errStr);
    } 

    if (getDiscordLogHook) {
        logHook(errStr, getDiscordHookUrl());
    }
}

module.exports = log;