const graphql = require("graphql");
const db = require("../../../db/index.js");
const elementType = require("../elementType.js");
const elementMutation = {
  updateElement: {
    type: elementType,
    args: {
      id: {
        type: graphql.GraphQLID,
      },
      name: {
        name: "name",
        type: graphql.GraphQLString,
      },
    },
    resolve: async (obj, args, context) => {
      var myobj = { id: args.id, name: args.name };
      const Test = await db.get().collection("test");
      return new Promise((resolve, reject) => {
        const res = Test.insertOne(myobj, function(err, res) {
          if (err) {
            console.error(err);
            reject(err);
          }
          resolve(res);
        });
      });
    },
  },
};

module.exports = elementMutation;
