const express = require("express");
const router = express.Router();
const cors = require('cors');
const auth = require("../models/authModel");
const util = require("../handlers/util")

/**********************************************************************
 * GET route is verified
 *********************************************************************/
router.get("/verify", cors(), async function (req, res) {
    let response = { "Response": "Verified"}
    res.status(200).json(response);
});

/**********************************************************************
 * POST login user
 *********************************************************************/
router.post("/login", function (req, res) {
    // console.log('authController.js /login, req = ' + JSON.stringify(req))
    // console.log('authController.js /login, res = ' + JSON.stringify(res))
    auth.adminLogin(req.body.password, req.body.email)
        .then((data) => {
	    console.log('authController.js /adminLogin, data = ' + JSON.stringify(data), data === 1)
            if (data === 0) {
                auth.login(req.body.password, req.body.email)
                    .then((data) => {
			console.log('authController.js /login, data = ' + JSON.stringify(data))
                        if (data === 0) {
                            return res.status(401).send({auth: false, token: null, msg: "No user found"})
                        }
                        let token = util.createToken(data)
                        res.status(200).json({token: token, auth: true, admin: false, user: data}).end();
                    })
                    .catch((err) => {
                        res.status(500).json({Error: err.message});
                    });
            } else {
                //create token
                let token = util.createToken(data)
		console.log('authController.js /adminLogin, token = ' + JSON.stringify(token));
                res.status(200).json({token: token, auth: true, admin: true, user: data}).end();
            }
        })
        .catch((err) => {
            res.status(500).json({Error: err.message});
        });
});

module.exports = router;
