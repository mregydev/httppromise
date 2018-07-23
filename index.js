const { get, request } = require('http');

module.exports = {
    get: function (options) {
        return new Promise
            ((resolve, reject) => {
                try {
                    get(options, res => resolve(res));
                }
                catch (ex) {
                    reject(ex);
                }
            });
    },
    request: function (options) {
        return new Promise
            ((resolve, reject) => {
                try {
                    request(options, res =>{
                         resolve(res);
                    }).end();
                }
                catch (ex) {
                    reject(ex);
                }
            });
    }

}