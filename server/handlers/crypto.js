const config = require('../config');
const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const rounds = 9921;
const keySize = 32;
const secret = config.APP_SECRET; //TODO this should be a variable, see config.js file
const salt = crypto.createHash('sha1').update(secret).digest("hex");

function encryptObject(data) {
    try {
        let iv = crypto.randomBytes(16);
        let key = crypto.pbkdf2Sync(secret, salt, rounds, keySize, 'sha512');
        let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
        let encryptedData = Buffer.concat([cipher.update(JSON.stringify(data)), cipher.final()]);
        return iv.toString('base64') + ':' + encryptedData.toString('base64');
    }
    catch (err) {
        console.error(err)
        return false;
    }
}

function decryptObject(encData) {
    try {
        let textParts = encData.split(':');
        let iv = Buffer.from(textParts.shift(), 'base64');
        let encryptedData = Buffer.from(textParts.join(':'), 'base64');
        let key = crypto.pbkdf2Sync(secret, salt, rounds, keySize, 'sha512');
        let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
        let decryptedData = decipher.update(encryptedData);
        decryptedData = Buffer.concat([decryptedData, decipher.final()]);
        return JSON.parse(decryptedData.toString());
    }
    catch (err) {
        console.error(err)
        return false;
    }
}


module.exports = {
    encryptObject,
    decryptObject
};
