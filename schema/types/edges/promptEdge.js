const promptType = require("../promptType");
const graphql = require("graphql");

const promptEdge = new graphql.GraphQLObjectType({
  name: "AuthorEdge",
  description: "List of edges.",
  fields: {
    node: {
      description: "The item at the end of the edge.",
      type: promptType,
    },
    cursor: {
      description: "A cursor for pagination.",
      type: graphql.GraphQLString,
    },
  },
});

module.exports = promptEdge;
