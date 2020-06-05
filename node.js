const http = require("http");
const app = require("./app.js");
const init = require("./server");
const path = require("path");
const nodemon = require("nodemon");
const glob = require("glob");
const watcher = require("./utils/watcher.js");
const fs = require("fs");
const { genMain, writeFile } = require("./utils/genmap.js");

process.once("SIGHUP", function() {
  console.log("Recieved signal SIGHUP");
});
async function genFile() {
  try {
    await genMain(writeFile, "root.json", true);
  } catch (e) {
    console.error(e);
  }
}
async function initNodeServer(run, start) {
  const files = ["root.json"];
  files.forEach(function(filePath) {
    if (fs.existsSync(filePath)) {
      fs.access(filePath, (error) => {
        if (!error) {
          // fs.unlinkSync(filePath, function(error) {
          //   console.log(error);
          // });
        } else {
          console.log(error);
        }
      });
    }
    console.log("writing");
  });
  await run(writeFile, "root.json", true);
  start();
}
nodemon({ script: "app.js" })
  .on("start", function() {
    console.log("*********");
    initNodeServer(genFile, init);
  })
  .on("restart", function() {
    console.log("Restarted.");
    genMain(writeFile, "root.json", true);
  })
  .on("crash", function() {
    console.log("************\n \
     Crashed. \n************\n");
  });

const log = (message) => {
  process.stdout.write(`${message}\n`);
};
// const root = path.resolve(__dirname, "app.js");
const normalizePort = (val) => {
  const port = parseInt(val, 10);
  if (Number.isNaN(port)) {
    return val;
  } else if (port >= 0) {
    return port;
  } else {
    return false;
  }
};

const port = normalizePort(process.env.PORT || 8000);

const server = http.createServer(app);
let availablePort = port;

const startServer = (serverPort) => {
  server.listen(serverPort);
};

const onError = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = `${typeof port === "string" ? "Pipe" : "Port"} ${port}`;
  switch (error.code) {
    case "EACCES":
      log(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      if (availablePort - port < 10) {
        availablePort += 1;
        startServer(availablePort);
      } else {
        log(`${bind} is already in use`);
        process.exit(1);
      }
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = `${typeof addr === "string" ? "pipe" : "port"} ${
    typeof addr === "string" ? addr : addr.port
  }`;
  log(`Server is listening on ${bind}`);
};

server.on("error", onError);
server.on("listening", onListening);
startServer(availablePort);
