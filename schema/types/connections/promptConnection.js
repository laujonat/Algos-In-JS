const pageInfo = require("../pageInfo.js");
const promptEdge = require("../edges/promptEdge.js");
const graphql = require("graphql");

const promptConnection = new graphql.GraphQLObjectType({
  name: "PromptConnection",
  fields: {
    totalCount: {
      description: "Identifies the total count of items in the connection.",
      type: graphql.GraphQLNonNull(graphql.GraphQLInt),
    },
    edges: {
      description: "A list of edges.",
      type: new graphql.GraphQLList(promptEdge),
    },
    pageInfo: {
      type: graphql.GraphQLNonNull(pageInfo),
    },
  },
});

module.exports = promptConnection;
