# Error Hooker
 Hooks errors and save them in logs folder in the root of NodeJs project or send it to webhooks.

## Before Everything:
Install it:
```
npm i error-hooker
```
### Important note: under developement!! please use latest version version!

and:
[How to get Discord webhook?](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks)

## How To Config
1- set appropriate configuration, for example:

````
const errorHooker = require('error-hooker');

// set discord webhook url
errorHooker.config.setDiscordHookUrl('URL OF DISCORD WEBHOOK');

// for logging into discord channel.
errorHooker.config.setLogFile(); 

// for logging into logs folder in the root of project's directory.
errorHooker.config.setDiscordLogHook(); 

// for logging in the console.
errorHooker.config.setConsole();

// for send response to the client.
errorHooker.config.setSendResponse();

// pass the express application.
errorHooker.config.setApp(app); 

````

2- use below code in the end of all express routers:

```
errorHooker.start();
```

## How to Use
in express controllers if you face some errors just try to use next() callback with this syntax:

```
next([HTTP_CODE, 'ERROR_STATUS', 'BODY_OF_ERROR']);
```

for example: 

```
app.get('/', (req, res, next) => {
   // app logic
   next([400, 'failed', 'id must be integer!']);
});
```

then output message is:

```
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

```
const errorHooker = require('error-hooker');
const app = require('express')();

// doesn't matter use my discord webhook :) have fun :))
errorHooker.config.setDiscordHookUrl('https://discord.com/api/webhooks/844646357372239882/BOmvPxqieTqr8H5G-FuMT2kLL639UbddTW5YmIXx5MJ0_fLj2yJGf1PJustZQhzGTK4L');

errorHooker.config.setLogFile();
errorHooker.config.setDiscordLogHook();
errorHooker.config.setSendResponse();
errorHooker.config.setConsole();
errorHooker.config.setApp(app);

app.get('/', (req, res, next) => {
   // app logic
   next([400, 'failed', 'id must be integer!']);
});

errorHooker.start();

app.listen(3004);
```

#### will be added in next version:
##### 1- slack logger.
##### 2- customize message shape.
##### 3- want more? mail to me! mojidev7@gmail.com

