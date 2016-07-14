var keys = require("@nathanfaucett/keys");


module.exports = objectSome;


function objectSome(object, callback) {
    var objectKeys = keys(object),
        i = -1,
        il = objectKeys.length - 1,
        key;

    while (i++ < il) {
        key = objectKeys[i];

        if (callback(object[key], key, object)) {
            return true;
        }
    }

    return false;
}
