const config = {};

const setLogFile = (status) => {
    if (typeof status === 'boolean')
    config.logFile = status;
}

const getLogFile = () => {
    return config.logFile;
}

const setDiscordLogHook = (status) => {
    if (typeof status === 'boolean')
    config.discordLogHook = status;
}

const getDiscordLogHook = () => {
    return config.discordLogHook;
}

const setDiscordHookUrl = (url) => {
    config.discordUrl = url;
}

const getDiscordHookUrl = () => {
    return config.discordUrl;
}

const setApp = (app) => {
    config.app = app;
}

const getApp = () => {
    return config.app;
}


module.exports = { 
    setLogFile,
    getLogFile,
    setDiscordLogHook,
    getDiscordLogHook,
    setDiscordHookUrl,
    getDiscordHookUrl,
    setApp,
    getApp,
};