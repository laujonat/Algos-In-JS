const express = require("express");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");
const graphqlHTTP = require("express-graphql");
const { graphql } = require("graphql");
const schema = require("./schema");
const multer = require("multer");
const upload = multer();
require("dotenv").config();

const app = express();
app.use(bodyParser.json({ limit: "50mb" }));

console.log("GraphQL API server at http://localhost:8000/graphql");
app.use(cors());
// app.use(/\/((?!graphql).)*/, bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(upload.array());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/", function(req, res) {
  res.send("All good!");
});

module.exports = app;
