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

function stringify(obj_from_json) {
  if (typeof obj_from_json !== "object" || Array.isArray(obj_from_json)) {
    // not an object, stringify using native function
    return JSON.stringify(obj_from_json);
  }
  // Implements recursive object serialization according to JSON spec
  // but without quotes around the keys.
  let props = Object.keys(obj_from_json)
    .map((key) => `${key}:${stringify(obj_from_json[key])}`)
    .join(",");
  return `{${props}}`;
}
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
  app.post("/updateEntry", async (req, res) => {
    const { elementid, entry, input, output, inputparams } = req.body;
    const ii = Array.of(JSON.parse(inputparams));
    // Not fun
    const query = `{ \
              element(id: ${elementid}) { \
                id \
                _id \
                updatePrompt(id: ${elementid}, \
                  input: ${stringify(input)}, \
                  output: ${stringify(output)}, \
                  entry: ${stringify(entry)}, \
                  inputparams: ${stringify(...ii)}) { \
                    edges { \
                      node { \
                        id \
                      } \
                    } \
                  } \
                type \
                category\
                param\
                file\
                proto\
                fn\
              }\
            }`;
    try {
      let data = await graphql(schema, query);
      res.status(200);
      res.send(JSON.stringify(data));
    } catch (e) {
      res.status(500);
      console.error("Error", e);
    }
  });
  app.get("/syncFiles", async (req, res) => {
    const file = JSON.parse(fs.readFileSync("root.json", "utf8"));
    const query = `{ \
              elements { \
                id \
                name \
                type \
                category\
                param\
                file\
                proto\
                fn\
                prompt { \
                  edges {\
                    node {\
                      id\
                      input\
                      output\
                      entry\
                      constraints\
                      inputparams\
                    }\
                  }\
                } \
              }\
            }`;
    try {
      let d = await graphql(schema, query);

      res.status(200);
      res.send(JSON.stringify(d));
    } catch (e) {
      res.status(500);
      console.error("Error", e);
    }
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
