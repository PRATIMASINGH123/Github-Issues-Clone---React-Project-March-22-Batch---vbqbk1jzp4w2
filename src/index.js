const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8080;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const connection = require("./connector");
const cors = require('cors');
app.use(cors())








app.listen(port);
exports.app = app;
