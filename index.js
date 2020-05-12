const cors = require("cors");
const fs = require("fs");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const glob = require("glob");
const watcher = require("./utils/watcher.js");

glob.sync("./lib/**/*.js").forEach(function(file) {
  console.log("FILE", file);
  require(file);
});
const app = express();
app.use(cors()), app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/syncFiles", (req, res) => {
  let body = JSON.parse(fs.readFileSync("data.json", "utf8"));
  if (!body) {
    res.status(500);
    res.send("Invalid data.json");
  }
  res.status(200);
  res.send(JSON.stringify(body));
});

module.exports = app;
