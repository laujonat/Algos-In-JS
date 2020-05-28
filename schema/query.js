const graphql = require("graphql");
const struct = require("./queries/struct.js");
const elements = require("./queries/elements.js");
const element = require("./queries/element.js");
const prompt = require("./queries/prompt.js");
const query = new graphql.GraphQLObjectType({
  name: "Query",
  fields: () => ({
    prompt,
    struct,
    element,
    elements,
  }),
});

module.exports = query;
