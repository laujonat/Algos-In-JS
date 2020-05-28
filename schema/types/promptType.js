const graphql = require("graphql");
const { objectScalarType } = require("../utils/gqlScalar.js");
const elementType = require("./elementType.js");

const promptType = new graphql.GraphQLObjectType({
  name: "prompt",
  fields: function() {
    return {
      _id: {
        type: graphql.GraphQLNonNull(graphql.GraphQLID),
        description: "Database ID of the element",
        resolve: (obj) => {
          return obj.id;
        },
      },
      id: {
        type: graphql.GraphQLID,
        description: "Globally unique ID of the element",
        resolve: (obj) => {
          return Buffer.from(`element-${obj.id}`).toString("base64");
        },
      },
      elementId: {
        type: graphql.GraphQLInt,
        description: "Associated element ID",
      },
      entry: {
        type: graphql.GraphQLString,
        description: "Free form prompt entry",
      },
      constraints: {
        type: graphql.GraphQLString,
        description: "Implementation constraints",
      },
      input: {
        type: graphql.GraphQLString,
        description: "Example input",
      },
      output: {
        type: graphql.GraphQLString,
        description: "Example output",
      },
      inputparams: {
        type: objectScalarType,
        description: "Function input param definitions",
      },
    };
  },
});

module.exports = promptType;
