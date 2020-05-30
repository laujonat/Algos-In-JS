const graphql = require("graphql");
const db = require("../../db/index.js");
const paramType = new graphql.GraphQLInputObjectType({
  name: "params",
  fields: function() {
    return {
      desc: {
        type: graphql.GraphQLString,
        description: "Globally unique ID of the element",
      },
      name: {
        type: graphql.GraphQLString,
        description: "Associated element ID",
      },
    };
  },
});

module.exports = paramType;
