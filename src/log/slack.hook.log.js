const axios = require('axios');

const log = (errStr, url) => {
	try {
		axios.post(url, {
			text: errStr,
		});
	} catch (err) {
		console.error('Error on sending slack log', err);
	}
};

module.exports = log;