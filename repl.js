"use strict";
var path = require("path");
const fs = require("fs");
process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;
let dirPath = path.join(__dirname, "lib");
function getCompiledFiles(dirPath, arrayOfFiles) {
  let files = fs.readdirSync(dirPath);
  let self = this;
  files.forEach(function(file) {
    arrayOfFiles = arrayOfFiles || [];
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getCompiledFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(dirPath + "/" + file);
    }
  });
  return arrayOfFiles;
}
process.stdin.on("data", function(inputStdin) {
  console.log("hello");
  eval(inputString);
  console.log(inputString);
  // inputString += inputStdin;
});
process.stdout.write("\n Reading js files: \n");
getCompiledFiles(dirPath, []).forEach((filePath) => {
  require(filePath);
});

process.on("SIGINT", function() {
  process.stdout.write("\n end \n");
  inputString = inputString.split("\n");
  main();
  process.exit();
});

function main() {
  // var root = readBinaryTree();
  console.log("Running..");
}
