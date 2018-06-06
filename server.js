
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const cors = require('cors')

const app = express();
app.use(bodyParser.json())

// var corsOptions = {
//     origin: 'http://localhost:4200',
//     optionsSuccessStatus: 200 
// }
  
// app.use(cors(corsOptions))

app.get('/todos', (req, res) => {
    res.send({data: ['work out', 'grocery shopping', 'make dinner']})
})

// !!! PRODUCTION ONLY !!! //

var distDir = __dirname + "/dist/test-app/";
app.use(express.static(distDir));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + "/dist/test-app/"))
})

app.listen(process.env.PORT || 8080);