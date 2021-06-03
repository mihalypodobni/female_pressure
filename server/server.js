"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const serveStatic = require("serve-static");
let history = require('connect-history-api-fallback');

let path = require('path');
const app = express();
if (process.env.NODE_ENV !== 'production') {
    // require('dotenv').config({path: '../.env'})
    require('dotenv').config()
}


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(history());
app.use(serveStatic(path.join(__dirname, '../dist')));

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
