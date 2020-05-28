const path = require("path");
const fs = require("fs");
const graphql = require("graphql");
const { objectScalarType } = require("../utils/gqlScalar.js");
const structType = require("../types/structType.js");

function readJsonFileSync(filepath, encoding) {
  if (typeof encoding == "undefined") {
    encoding = "utf8";
  }
  var file = fs.readFileSync(filepath, encoding);
  return JSON.parse(file);
}
function getConfig(file) {
  var filepath = path.resolve(__dirname, file);
  return readJsonFileSync(filepath);
}
let structs = getConfig(path.resolve(__dirname, "../../dsaa.json"));
const struct = {
  type: structType,
  args: {
    id: { type: graphql.GraphQLInt },
  },
  resolve: (_, { id }) => {
    return structs.filter((el) => {
      return String(el.dataid) === String(id);
    })[0];
  },
};

module.exports = struct;
