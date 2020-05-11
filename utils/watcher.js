"use strict";
const fs = require("fs");
const chokidar = require("chokidar");
const path = require("path");
const { exec } = require("child_process");

const log = console.log.bind(console);
const dirmap = new Map();
const dsdir = path.join(__dirname, "../datastructures");
const pdir = path.join(__dirname, "../problems");
dirmap.set(dsdir, { files: [], path: "", dir: "datastructures" });
dirmap.set(pdir, { files: [], path: "", dir: "problems" });
const getDirectories = (source) =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => {
      dirmap
        .get(source)
        .files.push(getCompiledFiles(source + "/" + dirent.name));
      dirmap.get(source).path = dirent.name;
    });

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

getDirectories(pdir);
getDirectories(dsdir);
for (const [src, { files, path, dir }] of dirmap.entries()) {
  chokidar
    .watch(src, {
      interval: 1000,
    })
    .on("ready", (event, path) => {
      exec(`babel ${dir}/ -d lib/${dir}`, (error, stdout, stderr) => {
        if (error) {
          log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          log(`stderr: ${stderr}`);
          return;
        }
        log(`stdout: ${stdout}`);
      });
    })
    .on("add", (event, path) => {
      log(`Adding: ${event}`);
    })
    .on("change", (event, path) => {
      log(`Change: ${event}`);
      exec(`babel ${dir}/ -d lib/${dir}`, (error, stdout, stderr) => {
        if (error) {
          log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          log(`stderr: ${stderr}`);
          return;
        }
        log(`stdout: ${stdout}`);
      });
    });
}
