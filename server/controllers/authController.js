const express = require("express");
const router = express.Router();
const cors = require('cors');
const Auth = require("../models/authModel");
const config = require('../config');
const Crypto = require('../handlers/crypto');
const jwt = require("jsonwebtoken");

/**********************************************************************
 * GET route is verified
 *********************************************************************/
router.get("/verify", cors(), async function (req, res) {
    let response = { "Response": "Valid Token"}
    res.status(200).json(response);
});

/**********************************************************************
 * POST login user
 *********************************************************************/
router.post("/login", function (req, res) {
    Auth.login(req.body.password, req.body.email)
        .then((data) => {
            if (data === 0) {
                return res.status(401).send({auth: false, token: null})
            }

            let jwtDataPayload = {user: data[0].email};

            let dateOfIssue = new Date()
            let jwtPayload = {"data": jwtDataPayload, "doi": dateOfIssue.getTime()}
            let payload = Crypto.encryptObject(jwtPayload)

            const token = jwt.sign({payload}, config.ACCESS_TOKEN_SECRET, {
                algorithm: "HS256",
                expiresIn: config.ACCESS_TOKEN_LIFE,
            })
            res.status(200).json({token: token, auth: true, user: data}).end();
        })
        .catch((err) => {
            res.status(500).json({Error: err.message});
        });
});


module.exports = router;
