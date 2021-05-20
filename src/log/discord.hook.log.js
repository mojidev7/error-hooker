const axios = require('axios');

const log = (errStr, url) => {
	try {
		axios.post(url, {
			content: errStr,
		});
	} catch (err) {
		console.error('Error on sending discord log', err);
	}
};

module.exports = log;
