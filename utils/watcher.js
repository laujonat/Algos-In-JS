"use strict";
const fs = require("fs");
const chokidar = require("chokidar");
const path = require("path");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

const log = console.log.bind(console);
const dirmap = new Map();
const dsdir = path.join(__dirname, "../dsaa");
const pdir = path.join(__dirname, "../problems");
dirmap.set(dsdir, { files: [], path: "", dir: "dsaa" });
dirmap.set(pdir, { files: [], path: "", dir: "problems" });
function execPromise(command) {
  return new Promise(function(resolve, reject) {
    exec(command, (error, stdout, stderr) => {
      log(command);
      if (error) {
        reject(error);
        return;
      }
      log("[./utils/watcher.js exec]", stdout.trim());
      resolve(stdout.trim());
    });
  });
}

const buildJsFiles = (dir) => {
  log(dir);
  execPromise(`babel ${dir} -d lib/${dir}`)
    .then(function(result) {
      log(result);
    })
    .catch(function(e) {
      error(e.message);
    });
};

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
    .on("add", (path) => /*log(`File ${path} has been added`)*/ {})
    .on("change", (path, event) => {
      log(`Change: ${path}`);
      log(`File ${path} has been changed`);
      let idx = path.lastIndexOf("/problems");
      let idx2 = path.lastIndexOf("/");
      path = path.substring(idx + 1, idx2);
      idx2 = path.lastIndexOf("/");
      try {
        execPromise(
          `babel ${path.substring(0, idx2)} -d lib/${path.substring(0, idx2)}`
        )
          .then(function(result) {
            log(result);
          })
          .catch(function(e) {
            error(e.message);
          });
      } catch (e) {
        error(e);
      }
    });
}
