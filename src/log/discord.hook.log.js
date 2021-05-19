const axios = require('axios')

const log = (errStr, url) => {
    axios
    .post(url, {
        content: errStr,
    })
    .then(res => {
        
    })
    .catch(error => {
        console.error(error);
    });
}

module.exports = log;