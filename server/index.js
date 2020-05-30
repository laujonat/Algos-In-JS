const graphqlHTTP = require("express-graphql");
const schema = require("../schema");
const app = require("../app.js");
const multer = require("multer");
const bodyParser = require("body-parser");
const express = require("express");

const fs = require("fs");
const { graphql } = require("graphql");
const upload = multer();
require("dotenv").config();
const db = require("../db");
const MONGODB_BASE = process.env.MONGODB_BASE;
const MONGODB_URL = process.env.MONGODB_URL;
const MONGODB_USER = process.env.MONGODB_USER;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
const url = `${MONGODB_BASE}${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}`;
const PORT = 8000;
const initHttpServer = async () => {
  db.connect(url, (err, client) => {
    if (err) {
      console.error("err", err);
    }
  });

  app.use(
    "/graphql",
    graphqlHTTP(async (request, response, graphQLParams) => ({
      schema: schema,
      graphiql: true,
      pretty: true,
    }))
  );
  app.post("/search", function(req, res) {
    const { params, body } = req;
    console.log(req.body);
    console.log(req.body.id, req.body.input, req.body.output);
    const edges =
      "prompt { \
      edges { \
        node { \
          id \
        } \
      } \
    }";
    const query = `{ element(id:${parseInt(
      params.id,
      10
    )}) { id _id type name category param file proto fn ${edges}} }`;
    try {
      let data = graphql(schema, query);
      res.status(200);
      res.send(JSON.stringify(data));
    } catch (e) {
      res.status(500);
      console.error("Error", e);
    }
  });
  app.get("/syncFiles", async (req, res) => {
    const data = JSON.parse(fs.readFileSync("root.json", "utf8"));
    if (!data) {
      res.status(500);
      res.send("Invalid data.json");
    }
    res.status(200);
    res.send(JSON.stringify(data));
  });

  app.get("/dsaa/:id", async (req, res) => {
    const params = req.params;
    console.log(params);
    const query =
      "{ element(id:" +
      parseInt(params.id, 10) +
      ") { id _id type name category param file proto fn} }";
    try {
      let data = await graphql(schema, query);
      res.status(200);
      res.send(JSON.stringify(data));
    } catch (e) {
      res.status(500);
      console.error("Error", e);
    }
  });

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
};
module.exports = initHttpServer;
