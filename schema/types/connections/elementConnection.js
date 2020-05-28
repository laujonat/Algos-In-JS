const pageInfo = require("../pageInfo.js");
const elementEdge = require("../edges/elementEdge.js");
const graphql = require("graphql");

const elementConnection = new graphql.GraphQLObjectType({
  name: "ElementConnection",
  fields: {
    totalCount: {
      description: "Identifies the total count of items in the connection.",
      type: graphql.GraphQLNonNull(graphql.GraphQLInt),
    },
    edges: {
      description: "A list of edges.",
      type: new graphql.GraphQLList(elementEdge),
    },
    pageInfo: {
      type: graphql.GraphQLNonNull(pageInfo),
    },
  },
});

module.exports = elementConnection;
