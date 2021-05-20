const errorHooker = require('../index');
const app = require('express')();

errorHooker.start({
	discord: {
		active: true,
		hookUrl:
			'https://discord.com/api/webhooks/844646357372239882/BOmvPxqieTqr8H5G-FuMT2kLL639UbddTW5YmIXx5MJ0_fLj2yJGf1PJustZQhzGTK4L',
	},
	file: {
		active: true,
		path: 'errors.log',
	},
	express: {
		app: app,
		sendResponse: true,
	},
	console: {
		active: true,
		logger: console,
	},
});

app.get('/', (req, res, next) => {
	// app logic
	next([400, 'failed', 'id must be integer!']);
});

app.listen(3004);
