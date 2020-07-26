const functions = require("firebase-functions");
const express = require("express");
var cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static("build"));

app.use("/shorten", require("./routes/shorten"));

app.use("/", require("./routes/redirect"));

exports.api = functions.region("asia-east2").https.onRequest(app);
