# Error Hooker
 Hooks errors and save them in logs foolder in the root of NodeJs project or send it to webhooks.

## Before Everything:
Install it:
```
npm i error-hooker
```
and:
[How to get Discord webhook?](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks)

## How To Config
1- set appropriate configuration, for example:

````
const errorHooker = require('error-hooker');

errorHooker.config.setDiscordHookUrl('URL OF DISCORD WEBHOOK');
errorHooker.config.setLogFile(true); // for logging into discord channel.
errorHooker.config.setDiscordLogHook(true); // for logging into logs folder in the root of project's directory.
errorHooker.config.setApp(app); // pass the express application.
````

2- use below code in the end of all express routers:

```
errorHooker.start();
```

## How to Use
in express controllers if you face some errors just try to use next() callback with this syntax:

```
next('Title_Of_Error, Message_Of_Error, Body_Of_Error'); //dont forget to use , (comma) for split error shape.
```
then output message is:

```
===========================================
title: Title_Of_Error
----
message:  Message_Of_Error
----
error:  Body_Of_Error
----
date: 2021-05-19T20:48:32.376Z
===========================================
```

### will be added in next version:
#### 1- slack logger.
#### 2- customize message shape.
#### 3- want more? mail to me! mojidev7@gmail.com

