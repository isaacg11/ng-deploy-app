
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json())

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.listen(process.env.PORT || 8080);