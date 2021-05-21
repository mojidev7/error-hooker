# Error Hooker
 Hooks errors and save them in logs folder in the root of NodeJs project or send it to webhooks.

## Before Everything:
Install it:
```bash
npm i error-hooker
```
### Important note: please use and check for latest version!

and:
[How to get Discord webhook?](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks)
[How to get Slack webhook?](https://api.slack.com/messaging/webhooks)

## How To Config
 set appropriate configuration, for example:

```js
const errorHooker = require('error-hooker');

errorHooker.start({
	discord: {
		active: true,
		hookUrl:'URL OF DISCORD WEBHOOK',
	},
	slack: {
		active: true,
		hookUrl:'URL OF SLACK WEBHOOK',
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
```
important note: please place these in the end of all routers.

## How to Use
in express controllers if you face some errors just try to use next() callback with this syntax:

```js
next([HTTP_CODE, 'ERROR_STATUS', 'BODY_OF_ERROR']);
```

for example:

```js
app.get('/', (req, res, next) => {
   // app logic
   next([400, 'failed', 'id must be integer!']);
});
```

then output message in the slack or discord is:

```log
===========================================
STATUS: failed
----
HTTP_CODE: 400
----
ERROR: id must be integer!
----
DATE: 2021-05-20T08:06:45.229Z
===========================================
```


## Full Example:

note: feel free for using my webhooks.

```js
const errorHooker = require('error-hooker');
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
```

#### will be added in next version:
##### ~~1- slack logger.~~
##### 2- customize message shape.
##### 3- want more? mail to me! mojidev7@gmail.com
##### 4- please star me in github :)

