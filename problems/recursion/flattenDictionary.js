/*
Flatten a Dictionary
A dictionary is a type of data structure that is supported natively in all major interpreted languages such as JavaScript, Python, Ruby and PHP, where it’s known as an Object, Dictionary, Hash and Array, respectively. In simple terms, a dictionary is a collection of unique keys and their values. The values can typically be of any primitive type (i.e an integer, boolean, double, string etc) or other dictionaries (dictionaries can be nested). However, for this exercise assume that values are either an integer, a string or another dictionary.

Given a dictionary dict, write a function flattenDictionary that returns a flattened version of it .

input:  dict = {
            "Key1" : "1",
            "Key2" : {
                "a" : "2",
                "b" : "3",
                "c" : {
                    "d" : "3",
                    "e" : {
                        "" : "1"
                    }
                }
            }
        }

output: {
            "Key1" : "1",
            "Key2.a" : "2",
            "Key2.b" : "3",
            "Key2.c.d" : "3",
            "Key2.c.e" : "1"
        }
*/

function flattenDictionary(dict) {
  if (Object.keys(dict).length === 0) {
    return {};
  }
  const res = {};

  const flattenHelper = (dict, prev) => {
    if (typeof dict !== "object") {
      res[prev] = dict;
      return dict;
    } else {
      let nk = prev + "." + Object.keys(dict)[0];
      for (const [k, v] of Object.entries(dict)) {
        if (!k) {
          flattenHelper(v, prev);
        } else {
          flattenHelper(v, prev + "." + k);
        }
      }
    }
  };

  // Key1, Key2
  for (const [k, v] of Object.entries(dict)) {
    let newKey = k;
    if (typeof v === "string" || !isNaN(v)) {
      res[k] = v;
    } else {
      flattenHelper(v, k); // k: "Key2"
    }
  }
  return JSON.stringify(res);
}

const dict = {
  Key1: "1",
  Key2: {
    a: "2",
    b: "3",
    c: {
      d: "3",
      e: {
        "": "1",
      },
    },
  },
};

// let res = flattenDictionary(dict);
module.exports = flattenDictionary;
