const { graphql, buildSchema } = require("graphql");

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Resolver
const root = {
  hello: () => {
    return "Hello world!";
  },
};

graphql(schema, "{ hello }", root).then((response) => {
  console.log(response);
});
