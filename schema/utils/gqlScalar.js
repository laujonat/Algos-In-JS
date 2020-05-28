const graphql = require("graphql");

// Reference: https://stackoverflow.com/questions/45598812/graphql-blackbox-any-type
const objectScalarType = new graphql.GraphQLScalarType({
  name: "Object",
  description: "Arbitrary object",
  parseValue: (value) => {
    return typeof value === "object"
      ? value
      : typeof value === "string"
      ? JSON.parse(value)
      : null;
  },
  serialize: (value) => {
    return typeof value === "object"
      ? value
      : typeof value === "string"
      ? JSON.parse(value)
      : null;
  },
  parseLiteral: (ast) => {
    switch (ast.kind) {
      case graphql.Kind.STRING:
        return JSON.parse(ast.value);
      case graphql.Kind.OBJECT:
        throw new Error(`Not sure what to do with OBJECT for ObjectScalarType`);
      default:
        return null;
    }
  },
});
module.exports = { objectScalarType };
