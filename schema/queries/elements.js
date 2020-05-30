const graphql = require("graphql");
const { objectScalarType } = require("../utils/gqlScalar.js");
const db = require("../../db/index.js");
const prepare = require("../utils/prepare.js");
const nodesToEdges = require("./nodesToEdges.js");
const elementConnection = require("../types/connections/elementConnection.js");
const promptConnection = require("../types/connections/promptConnection.js");
const elementEdge = require("../types/edges/elementEdge.js");
const elementType = require("../types/elementType.js");

const toConnection = require("./toConnection.js");

const elements = {
  type: new graphql.GraphQLList(elementType),
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
    const els = new Promise((resolve) => {
      setTimeout(async () => {
        let res = Root.find({})
          .limit(args.first)
          .toArray();
        resolve(res);
      }, 2000);
    });
    return Promise.resolve(els).then((res) => res);
    // return els;
  },
};

module.exports = elements;
