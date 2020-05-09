const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors()), app.use(express.static(path.join(__dirname, "../public")));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
module.exports = app;
