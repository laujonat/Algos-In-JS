const glob = require("glob");
const fs = require("fs");
const path = require("path");
const isDirectory = (path) => {
  return fs.lstatSync(path).isDirectory();
};
const libdir = path.join(__dirname, "../lib");
const data = glob.sync(libdir + "/**/*.js").reduce((acc, file, id) => {
  let index = file.lastIndexOf("datastructures");
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

if (fs.existsSync(path.resolve(__dirname, "data.json"))) {
  fs.writeFileSync("data.json", JSON.stringify(data));
}
