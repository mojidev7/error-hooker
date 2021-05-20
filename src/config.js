const config = {};

const setLogFile = () => {
    config.logFile = true;
}

const getLogFile = () => {
    return config.logFile;
}

const setDiscordLogHook = () => {
    config.discordLogHook = true;
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

const setSendResponse = () => {
    config.sendResponse = true;
}

const getSendResponse = () => {
    return config.sendResponse;
}

const setConsole = () => {
    config.console = true;
}

const getConsole = () => {
    return config.console;
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
    setSendResponse,
    getSendResponse,
    setConsole,
    getConsole,
};