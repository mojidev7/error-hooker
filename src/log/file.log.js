const fs = require('fs');
const path = require('path');

const logsDirection = path.join(__dirname, '../', '../', '../', '/logs');
if (!fs.existsSync(logsDirection)){
    fs.mkdirSync(logsDirection);
}

const log = (errStr) => {
    fs.appendFile(path.join(logsDirection, 'errors.log.txt'), errStr, () => {});
}

module.exports = log;