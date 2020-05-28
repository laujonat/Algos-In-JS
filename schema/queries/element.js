const graphql = require("graphql");
const { objectScalarType } = require("../utils/gqlScalar.js");
const db = require("../../db/index.js");
const elementType = require("../types/elementType.js");
const prepare = require("../utils/prepare.js");
const nodesToEdges = require("./nodesToEdges.js");
const toConnection = require("./toConnection.js");
const element = {
  type: elementType,
  args: {
    id: { type: graphql.GraphQLInt },
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
        let res = Root.findOne({ id: args.id });

        resolve(res);
      }, 2000);
    });
    // const promptCount = await Prompt.find({ elementid: args.id }).count();
    // return Promise.resolve(els).then((res) => {
    //   // console.log('res', res);
    //   const edges = nodesToEdges(Array.from(res), after);
    //   console.log("edges", edges);
    //   return toConnection(
    //     edges,
    //     promptCount,
    //     edges.length === args.first,
    //     after > 0
    //   );
    // });
    return els;
  },
};
// resolve: async (_, { id }) => {
//   const Root = await db.get().collection("root");
//   const results = new Promise((resolve) => {
//     setTimeout(async () => {
//       let res = Root.findOne({ id: parseInt(id, 10) });
//       resolve(res);
//     }, 2000);
//   });
//   return results;
// },

module.exports = element;
