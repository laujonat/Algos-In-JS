const cors = require("cors");
const fs = require("fs");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const graphqlHTTP = require("express-graphql");
const { graphql } = require("graphql");
const schema = require("../schema");
const app = require("../app.js");
require("dotenv").config();
const db = require("../db");
const MONGODB_BASE = process.env.MONGODB_BASE;
const MONGODB_URL = process.env.MONGODB_URL;
const MONGODB_USER = process.env.MONGODB_USER;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
const url = `${MONGODB_BASE}${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}`;

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

  app.get("/syncFiles", async (req, res) => {
    let collection = await db
      .get()
      .collection("root")
      .distinct("file");
    console.log(collection);
    const data = JSON.parse(fs.readFileSync("data.json", "utf8"));
    if (!data) {
      res.status(500);
      res.send("Invalid data.json");
    }
    res.status(200);
    res.send(JSON.stringify(data));
  });

  app.get("/dsaa/:id", async (req, res) => {
    const params = req.params;
    let qres;
    const query =
      '{ struct(dataid:"' +
      params.id +
      '") { id type name params description properties} }';
    try {
      let data = await graphql(schema, query);
      res.status(200);
      res.send(JSON.stringify(data));
    } catch (e) {
      res.status(200);
      console.error("Error", e);
    }
  });

  app.listen(8000, () => {
    console.log("listening");
  });
};
module.exports = initHttpServer;
