
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json())

var distDir = __dirname + "/dist/test-app/";
app.use(express.static(distDir));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + "/dist/test-app/"))
})

app.listen(process.env.PORT || 8080);

console.log(__dirname)