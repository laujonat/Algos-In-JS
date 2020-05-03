"use strict";
var path = require("path");
const fs = require("fs");
// const BinaryTree = require("./lib/BinaryTree.js");

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
      console.log(dirPath + "/" + file);
      arrayOfFiles = getCompiledFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(dirPath + "/" + file);
    }
  });
  return arrayOfFiles;
}

process.stdout.write("\n Reading js files: \n");
getCompiledFiles(dirPath, []).forEach((filePath) => {
  require(filePath);
});
process.stdin.on("data", function(inputStdin) {
  inputString += inputStdin;
});

process.on("SIGINT", function() {
  process.stdout.write("\n end \n");
  inputString = inputString.split("\n");
  main();
  process.exit();
});

function readBinaryTree() {
  var inputBinaryTree = new BinaryTree();
  inputBinaryTree.readRawValues();
  inputBinaryTree.buildFromRawValues();
  return inputBinaryTree.root;
}

function main() {
  var root = readBinaryTree();
  var result = findSingleValueTrees(root);
  console.log(result);
}
