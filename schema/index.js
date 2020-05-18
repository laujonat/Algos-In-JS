const graphqlHTTP = require("express-graphql");
const graphql = require("graphql");
const app = require("../index.js");
const path = require("path");
const fs = require("fs");
const { problemType, structType, objectScalarType } = require("./types.gql");
const { buildSchema } = require("graphql");

function readJsonFileSync(filepath, encoding) {
  if (typeof encoding == "undefined") {
    encoding = "utf8";
  }
  var file = fs.readFileSync(filepath, encoding);
  return JSON.parse(file);
}

function getConfig(file) {
  var filepath = path.resolve(__dirname, file);
  return readJsonFileSync(filepath);
}

let structs = getConfig(path.resolve(__dirname, "../dsaa.json"));
let problems = getConfig(path.resolve(__dirname, "../data.json"));

// Define Query Type
const queryType = new graphql.GraphQLObjectType({
  name: "Query",
  fields: {
    structs: {
      args: {
        dataid: { type: graphql.GraphQLString },
      },
      type: structType,
      resolve: (root, args, context, info) => {
        return new Promise((resolve, reject) => {
          let res = structs.filter((el) => {
            return String(el.dataid) === String(args.dataid);
          })[0];
          return resolve(res);
        });
      },
    },
    struct: {
      type: structType,
      args: {
        id: { type: graphql.GraphQLString },
        dataid: { type: graphql.GraphQLString },
      },
      resolve: (_, { id, dataid }) => {
        if (dataid) {
          return structs.filter((el) => {
            return String(el.dataid) === String(dataid);
          })[0];
        }
        return structs[dataid];
      },
    },
    problem: {
      type: problemType,
      args: {
        id: { type: graphql.GraphQLString },
      },
      resolve: (_, { id }) => {
        return problems[id];
      },
    },
  },
});
const schema = new graphql.GraphQLSchema({ query: queryType });

console.log("Running a GraphQL API server at http://localhost:8000/graphql");
module.exports = schema;
