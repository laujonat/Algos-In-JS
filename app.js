const cors = require("cors");
const fs = require("fs");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const graphqlHTTP = require("express-graphql");
const { graphql } = require("graphql");
const schema = require("./schema");
require("dotenv").config();

const app = express();

const corsOptions = {
  origin: "http://localhost:8000",
};
console.log("GraphQL API server at http://localhost:8000/graphql");
app.use(cors(corsOptions));
app.use(/\/((?!graphql).)*/, bodyParser.urlencoded({ extended: true }));
app.use(/\/((?!graphql).)*/, bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

module.exports = app;
