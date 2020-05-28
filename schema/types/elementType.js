const graphql = require("graphql");
const { objectScalarType } = require("../utils/gqlScalar.js");
const promptType = require("./promptType.js");
const db = require("../../db/index.js");
const elementConnection = require("./connections/elementConnection.js");
const elementType = new graphql.GraphQLObjectType({
  name: "element",
  fields: () => ({
    id: {
      type: graphql.GraphQLID,
      description: "Globally unique ID of the element",
      resolve: (obj) => {
        return Buffer.from(`element-${obj.id}`).toString("base64");
      },
    },
    _id: {
      type: graphql.GraphQLNonNull(graphql.GraphQLID),
      description: "Database ID of the element",
      resolve: (obj) => {
        return obj.id;
      },
    },
    name: {
      type: graphql.GraphQLString,
      description: "Humanreadable name of node",
    },
    category: {
      type: graphql.GraphQLString,
      description: "Category indicator for file gen",
    },
    type: {
      type: graphql.GraphQLString,
      description: "Type of module within a category ",
    },
    param: {
      type: objectScalarType,
      description: "List of input parameters",
    },
    file: {
      type: graphql.GraphQLString,
      description: "Node filepath",
    },
    proto: {
      type: objectScalarType,
      description: "List of object prototypes",
    },
    fn: {
      type: objectScalarType,
      description: "Raw code implementation",
    },
    prompt: {
      type: promptType,
      description: "Edge between and element and prompt",
    },
  }),
});

// prompts: {
//   type: elementConnection,
//   args: {
//     first: {
//       defaultValue: 10,
//       description:
//         "Limits the number of results returned in the page. Defaults to 10.",
//       type: graphql.GraphQLInt,
//     },
//     after: {
//       defaultValue: "Y3Vyc29yMA==", // base64encode('cursor0')
//       description:
//         "The cursor value of an item returned in previous page. An alternative to in integer offset.",
//       type: graphql.GraphQLString,
//     },
//     query: {
//       type: graphql.GraphQLString,
//     },
//   },
//   resolve: async (obj, args, context) => {
//     const after =
//       typeof args.after === "undefined" || args.after === null
//         ? 0
//         : parseInt(
//             Buffer.from(args.after, "base64")
//               .toString("ascii")
//               .replace("cursor", ""),
//             10
//           );
//     const quotes = await db
//       .get()
//       .collection("prompt")
//       .find({
//         first: args.first,
//         after,
//         elementid: obj.id,
//         query: args.query,
//       });
//     const quotesCount = await db
//       .get()
//       .collection("prompt")
//       .count({
//         elementid: obj.id,
//         query: args.query,
//       });
//     const edges = nodesToEdges(quotes, after);
//     return toConnection(
//       edges,
//       quotesCount,
//       edges.length === args.first,
//       after > 0
//     );
//   },
// },
module.exports = elementType;
