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
    const els = new Promise((resolve) => {
      setTimeout(async () => {
        let res = Root.findOne({ id: args.id });
        resolve(res);
      }, 2000);
    });
    return els;
  },
};

module.exports = element;
