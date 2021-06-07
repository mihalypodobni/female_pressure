const express = require("express");
const router = express.Router();
const cors = require('cors');
const search = require("../models/searchModel");


/**********************************************************************
 * GET load filter data for searching
 *********************************************************************/
router.get("/filter-data", cors(), async function (req, res) {
    search.getFilterData()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({Error: err.message});
        });
});

module.exports = router;