const router = (module.exports = require("express").Router());
const jwt = require("jsonwebtoken");
const config = require('../config');
const Crypto = require('../handlers/crypto')
const Utility = require('../handlers/util')

/**********************************************************************
 * Verifies User Token for every request made. If token is expired & has not
 * been inactive for set time, then create new token and send back to
 * client, else send back error
 *********************************************************************/
router.use(["/auth/", "/users/"], async function (req, res, next) {
    if (req.url === '/login') {
        next()
    }
    res.header("Authorization", undefined)
    let validToken = false;
    let user_info = {};
    let token = req.headers["authorization"];
    if (token) {
        try {
            // strip "Bearer " from string
            token = token.slice(7, token.length);

            user_info = await jwt.verify(token, config.ACCESS_TOKEN_SECRET);
            if (user_info) {
                validToken = true;
            }
        } catch (err) {
            if (err.message === 'jwt expired') {

                // extract and decrypt payload from expired token
                user_info = await jwt.verify(token, config.ACCESS_TOKEN_SECRET, {ignoreExpiration: true});
                let decrypted = Crypto.decryptObject(user_info.payload)

                //check if token is older than inactivity period
                if (Utility.checkUserSessionExpired(decrypted.doi)) {
                    validToken = false;

                    //create new token, set header and send back to client
                } else {
                    decrypted.doi = new Date().getTime()
                    let payload = Crypto.encryptObject(decrypted)
                    const newToken = jwt.sign({payload}, config.ACCESS_TOKEN_SECRET, {
                        algorithm: "HS256",
                        expiresIn: config.ACCESS_TOKEN_LIFE,
                    })
                    const authToken = "NewToken " + newToken
                    res.header("Authorization", authToken)
                    validToken = true;
                }
            }
        }
    }
    if (!validToken) {
        switch (req.baseUrl) {
            case "/auth":
                res.status(401).json({Error: "Routing Error"});
                break;
            case "/classification":
                res.status(401).json({Error: "VialServer Error"});
                break;
        }
    } else {
        next()
    }
});

router.use("/auth", require("../controllers/authController"))
router.use("/users", require("../controllers/userController"));
