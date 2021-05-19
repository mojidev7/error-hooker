const config = require('./src/config');
const log = require('./src/log');

const start = () => {
    console.log('ErrorHooker started successfully!');
    config.getApp().use((err, req, res, next) => {
        const errArray = err.split(',');
        if (err) log(errArray[0], errArray[1], errArray[2]);
        next();
    });
}

const errorHooker = {
    config,
    start,
}

module.exports = errorHooker;