const axios = require('axios');

const log = (errStr, url) => {
	try {
		axios.post(url, {
			content: errStr,
		});
	} catch (err) {
		console.error(err);
	}
};

module.exports = log;
