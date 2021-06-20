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

/**********************************************************************
 * GET member search
 *********************************************************************/
router.get("/member-search/:query", cors(), async function (req, res) {
    search.memberSearch(req.params.query)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({Error: err.message});
        });
});

/**********************************************************************
 * POST data for table
 *********************************************************************/
router.post("/load-table", cors(), async function (req, res) {
    search.loadMembers(req.body)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({Error: err.message});
        });
});

module.exports = router;