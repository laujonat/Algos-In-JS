var MongoClient = require("mongodb").MongoClient;

var state = {
  db: null,
};

const connect = function(url, done) {
  if (state.db) return done();
  MongoClient.connect(url, (err, client) => {
    if (err) return console.log("ERROR", err);
    var db = client.db("leetcode");
    state.db = db;
    done(null, db);
  });
};

const get = function() {
  return state.db;
};

const close = function(done) {
  if (state.db) {
    state.db.close(function(err, result) {
      state.db = null;
      state.mode = null;
      done(err);
    });
  }
  return state.db;
};

module.exports = {
  connect,
  get,
  close,
};
