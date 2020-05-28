const graphql = require("graphql");
const { objectScalarType } = require("../utils/gqlScalar.js");

const structType = new graphql.GraphQLObjectType({
  name: "struct",
  fields: function() {
    return {
      id: { type: graphql.GraphQLString },
      dataid: { type: graphql.GraphQLString },
      name: { type: graphql.GraphQLString },
      type: { type: graphql.GraphQLString },
      description: { type: graphql.GraphQLString },
      filepath: { type: graphql.GraphQLString },
      properties: { type: objectScalarType },
      params: { type: objectScalarType },
      dependencies: { type: objectScalarType },
    };
  },
});

module.exports = structType;
