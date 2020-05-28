const elementType = require("../elementType");
const graphql = require("graphql");

const elementEdge = new graphql.GraphQLObjectType({
  name: "AuthorEdge",
  description: "List of edges.",
  fields: {
    node: {
      description: "The item at the end of the edge.",
      type: elementType,
    },
    cursor: {
      description: "A cursor for pagination.",
      type: graphql.GraphQLString,
    },
  },
});

module.exports = elementEdge;
