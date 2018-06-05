
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json())

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.get('*', (req, res) => {
    res.redirect(__dirname + "/dist/")
});

app.listen(process.env.PORT || 8080);
