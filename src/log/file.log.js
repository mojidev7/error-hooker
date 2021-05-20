const fs = require('fs');
const path = require('path');

const logsDirection = path.join(__dirname, '../', '../', '../', '../', '/logs');
if (!fs.existsSync(logsDirection)) {
	fs.mkdirSync(logsDirection);
}

const log = (errStr, p) => {
	fs.appendFile(path.join(logsDirection, p), errStr, () => {});
};

module.exports = log;
