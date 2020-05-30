const graphql = require("graphql");
const promptType = require("../promptType");

const promptEdge = new graphql.GraphQLObjectType({
  name: "PromptEdge",
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
