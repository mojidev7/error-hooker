const config = require('./src/config');
const log = require('./src/log');

const start = () => {
    console.log('ErrorHooker started successfully!');
    config.getApp().use((err, req, res, next) => {

        if (typeof err[0] !== 'number'){
            err[0] = 500;
        }

        if (err) log(err[0], err[1], err[2]);
        if (config.getSendResponse()) {
            return res.status(err[0]).json({
                status: err[1],
                error: err[2],
            });
        }
        next();
    });
}

const errorHooker = {
    config,
    start,
}

module.exports = errorHooker;