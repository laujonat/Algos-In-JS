const graphql = require("graphql");
const { objectScalarType } = require("../utils/gqlScalar.js");
const paramType = require("./paramType.js");
const promptType = require("./promptType.js");
const nodesToEdges = require("../queries/nodesToEdges.js");
const toConnection = require("../queries/toConnection.js");
const promptConnection = require("./connections/promptConnection.js");
const db = require("../../db/index.js");
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
    updatePrompt: {
      type: promptConnection,
      args: {
        id: {
          type: graphql.GraphQLID,
        },
        name: {
          name: "Method name",
          type: graphql.GraphQLString,
        },
        entry: {
          name: "Prompt entry",
          type: graphql.GraphQLString,
        },
        input: {
          name: "Example input",
          type: graphql.GraphQLString,
        },
        output: {
          name: "Example output",
          type: graphql.GraphQLString,
        },
        inputparams: {
          name: "Input Parameters",
          type: graphql.GraphQLList(paramType),
          description: "Function input param definitions",
        },
      },
      resolve: async (obj, args, context) => {
        const { entry, input, output, inputparams } = args;
        const myobj = { elementid: obj.id, entry, input, output, inputparams };
        console.log("m", myobj);
        const Prompt = await db.get().collection("prompt");
        return new Promise((resolve, reject) => {
          const res = Prompt.findOneAndUpdate(
            { elementid: obj.id },
            { $set: myobj },
            { upsert: true },
            function(err, res) {
              if (err) {
                console.error(err);
                reject(err);
              }
              resolve(res);
            }
          );
        });
      },
    },
    prompt: {
      type: promptConnection,
      args: {
        first: {
          defaultValue: 10,
          description:
            "Limits the number of results returned in the page. Defaults to 10.",
          type: graphql.GraphQLInt,
        },
        after: {
          defaultValue: "Y3Vyc29yMA==", // base64encode('cursor0')
          description:
            "The cursor value of an item returned in previous page. An alternative to in integer offset.",
          type: graphql.GraphQLString,
        },
        query: {
          type: graphql.GraphQLString,
        },
      },
      resolve: async (obj, args, context) => {
        const after =
          typeof args.after === "undefined" || args.after === null
            ? 0
            : parseInt(
                Buffer.from(args.after, "base64")
                  .toString("ascii")
                  .replace("cursor", ""),
                10
              );
        const Prompt = await db.get().collection("prompt");
        const prompts = await Prompt.find({
          elementid: obj.id,
        }).toArray();
        const edges = nodesToEdges(prompts, after);
        return toConnection(
          edges,
          prompts.length,
          edges.length === args.first,
          after > 0
        );
      },
    },
  }),
});
module.exports = elementType;
