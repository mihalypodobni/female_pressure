const express = require("express");
const router = express.Router();
const cors = require('cors')

/**********************************************************************
 * GET route is verified
 *********************************************************************/
router.get("/verify", cors(), async function (req, res) {
    let response = { "Response": "Valid Token"}
    res.status(200).json(response);
});

module.exports = router;
