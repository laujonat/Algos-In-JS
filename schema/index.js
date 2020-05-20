const graphqlHTTP = require("express-graphql");
const graphql = require("graphql");
const app = require("../app.js");
const path = require("path");
const fs = require("fs");
const {
  problemType,
  structType,
  structsType,
  objectScalarType,
} = require("./types.gql");
const db = require("../db/index.js");

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
const queryType = new graphql.GraphQLObjectType({
  name: "Query",
  fields: {
    structs: {
      type: new graphql.GraphQLList(structsType),
      resolve: function() {
        console.log(db.get());
        return structs;
        // return new Promise(function(resolve, reject) {
        //   setTimeout(function() {
        //     resolve(JSON.stringify([...structs]));
        //     // collection.find().toArray(function(err, docs) {
        //   }, 4000);
        // });
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
        // return problems[id];
        return null;
      },
    },
  },
});
const schema = new graphql.GraphQLSchema({ query: queryType });

console.log("Running a GraphQL API server at http://localhost:8000/graphql");
module.exports = schema;
