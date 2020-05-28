const graphql = require("graphql");

const pageInfo = new graphql.GraphQLObjectType({
  name: "PageInfo",
  description: "Information about pagination in a connection.",
  fields: {
    endCursor: {
      description: "The item at the end of the edge.",
      type: graphql.GraphQLString,
    },
    hasNextPage: {
      description: "When paginating forwards, are there more items?",
      type: graphql.GraphQLBoolean,
    },
    hasPreviousPage: {
      description: "When paginating backwards, are there more items?",
      type: graphql.GraphQLBoolean,
    },
    startCursor: {
      description: "When paginating backwards, the cursor to continue.",
      type: graphql.GraphQLString,
    },
  },
});

module.exports = pageInfo;
