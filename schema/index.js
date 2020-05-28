const graphqlHTTP = require("express-graphql");
const graphql = require("graphql");
const { MongoClient, ObjectId } = require("mongodb");
const app = require("../app.js");
const path = require("path");
const fs = require("fs");
const db = require("../db/index.js");
const query = require("./query.js");

const schema = new graphql.GraphQLSchema({ query });
console.log("Running a GraphQL API server at http://localhost:8000/graphql");
module.exports = schema;
