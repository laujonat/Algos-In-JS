const graphql = require("graphql");
const db = require("../../../db/index.js");
const elementMutation = require("./elementMutations.js");

let RootMutation = new graphql.GraphQLObjectType({
  name: "Mutation",
  description: "Root Mutation",
  fields: () => ({
    updateElement: elementMutation.updateElement,
  }),
});

module.exports = RootMutation;
