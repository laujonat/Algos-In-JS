"use strict";
var path = require("path");
const fs = require("fs");
process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;
let arrayOfFiles = [];
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
getCompiledFiles(dirPath, arrayOfFiles).forEach((filePath) => {
  require(filePath);
});
// Reading passed parameter
process.argv.forEach(function(val, index, array) {
  console.log(index + ": " + val);
});

// Getting executable path
console.log(process.execPath);

console.log(arrayOfFiles);
