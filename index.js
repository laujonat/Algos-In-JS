const cors = require("cors");
const fs = require("fs");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const glob = require("glob");
const schema = require("./schema");
const graphqlHTTP = require("express-graphql");
const { graphql } = require("graphql");
glob.sync("./lib/**/*.js").forEach(function(file) {
  require(file);
});
const data = JSON.parse(fs.readFileSync("data.json", "utf8"));
const app = express();
app.use(
  "/graphql",
  graphqlHTTP(async (request, response, graphQLParams) => ({
    schema: schema,
    graphiql: true,
  }))
);
console.log("Running a GraphQL API server at http://localhost:8000/graphql");
app.use(cors()), app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/syncFiles", (req, res) => {
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

module.exports = app;
