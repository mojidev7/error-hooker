const errorHooker = require('../index');
const app = require('express')();


app.get('/', (req, res, next) => {
	// app logic
	next([400, 'failed', 'id must be integer!']);
});

errorHooker.start({
	discord: {
		active: true,
		hookUrl:
			'https://discord.com/api/webhooks/844646357372239882/BOmvPxqieTqr8H5G-FuMT2kLL639UbddTW5YmIXx5MJ0_fLj2yJGf1PJustZQhzGTK4L',
	},
	slack: {
		active: true,
		hookUrl:
			'https://hooks.slack.com/services/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',
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



app.listen(3004);
