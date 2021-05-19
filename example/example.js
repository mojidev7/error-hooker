const errorHooker = require('../index');
const app = require('express')();

errorHooker.config.setDiscordHookUrl('https://discord.com/api/webhooks/844646357372239882/BOmvPxqieTqr8H5G-FuMT2kLL639UbddTW5YmIXx5MJ0_fLj2yJGf1PJustZQhzGTK4L');
errorHooker.config.setLogFile(true);
errorHooker.config.setDiscordLogHook(true);
errorHooker.config.setApp(app);


app.get('/', (req, res, next) => {
   next('testtitle,testmessage,testErr');
});

errorHooker.start();



app.listen(3004);