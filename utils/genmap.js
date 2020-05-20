const glob = require("glob");
const fs = require("fs");
const path = require("path");
const SourceCode = require("eslint").SourceCode;
const libdir = path.join(__dirname, "../lib");
const json = new Map();

const isDirectory = (path) => {
  return fs.lstatSync(path).isDirectory();
};
const writeFile = function(filename, json) {
  if (!fs.existsSync(path.resolve(__dirname, filename))) {
    fs.writeFileSync(filename, JSON.stringify(new Object(json)));
  } else {
    bigOutput(`${filename} already exists.`);
  }
};
// Determines if param is a class definition by checking whether default constructor exists
function initConstruct(f) {
  let args = ["a", "b", "c", "d", "e", "f"];
  try {
    let res = Reflect.construct(f, args);
    return res;
  } catch (e) {
    return false;
  }
  return true;
}

function isClass(func) {
  return (
    typeof func === "function" &&
    /^class\s/.test(Function.prototype.toString.call(func))
  );
}
function bigOutput(str) {
  console.log("*******************\n" + str + "\n*********************\n");
}

const genTemplate = (write) => {
  glob.sync(libdir + "/**/*.js").reduce((acc, file, id) => {
    let index = file.lastIndexOf("dsaa");
    let indexb = file.lastIndexOf("problems");
    let [category, type, name] = file
      .substring(index > 0 ? index : indexb)
      .split("/");
    let regex = name.match(/[a-zA-Z][a-z]+/g);
    regex.pop();
    let readablename = regex.join(" ");
    readablename = readablename.charAt(0).toUpperCase() + readablename.slice(1);
    acc.push({
      id: id,
      name: readablename,
      category,
      type,
      filepath: file,
      params: [],
    });
    return acc;
  }, []);
  if (write) {
    if (!fs.existsSync(path.resolve(__dirname, "data.json"))) {
      fs.writeFileSync("data.json", JSON.stringify(data));
    } else {
      console.warn("data.json already exists.");
    }
  }
  bigOutput("[genTemplate]: Done.");
};

const genMain = function(writeFile, filename, force) {
  glob.sync(libdir + "/**/*.js").forEach(function(file, id) {
    let obj = {};
    let r = require(file);
    // r = null;

    if (isClass(r)) {
      let proto = initConstruct(r);
      json.set(id, {
        id,
        param: Object.getOwnPropertyNames(proto),
        file: file.slice(1),
        proto: Object.getOwnPropertyNames(r.prototype),
        fn: SourceCode.splitLines(r.toString()),
      });
    } else {
      if (!r.name) {
      } else {
        json.set(id, {
          ...obj,
          file: file.slice(1),
          proto: "",
          fn: SourceCode.splitLines(r.toString()),
        });
      }
    }
  });

  if (force) {
    writeFile(filename, Array.from(json.values()));
  }
  bigOutput(`${filename} has been created.`);
};
if (process.argv.length === 3) {
  const targetIdx = process.argv.indexOf("--target");
  if (targetIdx === -1) {
    console.error("Specify additional args with --target");
  }
  process.exit(1);
} else {
  const targetIdx = process.argv.indexOf("--target");
  if (targetIdx > -1) {
    let nameValue = process.argv[targetIdx + 1];
    if (nameValue === "--root") {
      genMain(writeFile, "root.json", true);
    } else if (nameValue === "---data") {
    } else {
      bigOutput("\nInvalid flag. \nUse [--root] [--data].\n");
    }
  }
}

module.exports = {
  writeFile,
  genMain,
};
