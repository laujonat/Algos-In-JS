const graphql = require("graphql");
const { objectScalarType } = require("../utils/gqlScalar.js");
// const elementType = require("../types/elementType.js");
const db = require("../../db/index.js");
const prepare = require("../utils/prepare.js");
const nodesToEdges = require("./nodesToEdges.js");
const elementConnection = require("../types/connections/elementConnection.js");
const toConnection = require("./toConnection.js");

const elements = {
  type: elementConnection,
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
    name: {
      type: graphql.GraphQLString,
    },
    file: {
      type: graphql.GraphQLString,
    },
    id: {
      type: graphql.GraphQLID,
    },
  },
  resolve: async (_, args, context) => {
    const after =
      typeof args.after === "undefined" || args.after === null
        ? 0
        : parseInt(
            Buffer.from(args.after, "base64")
              .toString("ascii")
              .replace("cursor", ""),
            10
          );

    const Root = await db.get().collection("root");
    const Prompt = await db.get().collection("prompt");
    const els = new Promise((resolve) => {
      setTimeout(async () => {
        let res = Root.find({ id: args.id })
          .limit(args.first)
          .toArray();

        resolve(res);
      }, 2000);
    });
    // const promptCount = await Prompt.find({ elementid: args.id }).count();
    // Promise.resolve(els).then((res) => {
    //   // console.log('res', res);
    //   const edges = nodesToEdges(res, after);
    //   console.log("edges", edges);
    //   const connection = toConnection(
    //     edges,
    //     promptCount,
    //     edges.length === args.first,
    //     after > 0
    //   );
    //   console.log(connection);
    // });

    return els;
  },
};

module.exports = elements;
