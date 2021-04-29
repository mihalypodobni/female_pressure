"use strict";
const express = require('express');

const bodyParser = require('body-parser');
const serveStatic = require("serve-static");

let path = require('path');
const app = express();

require("dotenv").config({path: '../.env'});
app.use(serveStatic(path.join(__dirname, '../dist')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const cors = require('cors')
app.use(cors({
    exposedHeaders: ['Authorization'],
    cacheControl: ['no-store']
}));

app.use("/", require("./routes/index.js"));

let port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Express server listening on port ' + port)
});
