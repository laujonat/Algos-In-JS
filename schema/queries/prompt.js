const graphql = require("graphql");
const { objectScalarType } = require("../utils/gqlScalar.js");
const db = require("../../db/index.js");
const promptType = require("../types/elementType.js");
const elementType = require("../types/elementType.js");

const prepare = require("../utils/prepare.js");
const prompt = {
  type: promptType,
  args: {
    elementid: { type: graphql.GraphQLInt },
  },
  resolve: async (obj, args) => {
    const Prompt = await db.get().collection("prompt");
    const results = new Promise((resolve) => {
      setTimeout(async () => {
        let res = await Prompt.findOne({});
        resolve(res);
      }, 2000);
    });
    return results;
  },
};

module.exports = prompt;
