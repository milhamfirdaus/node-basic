// This is core modules
const http = require("http");

// This is local modules
const checkProcess = require("./components/process");
//const myEventEmitter = require("./components/events");
const stream = require("./components/stream");

// Our server listener
const listener = (req, res) => {
  console.log(req.url, "This url req");

  // Simple routing
  if (req.url === "/process") {
    checkProcess();
  } else if (req.url === "/stream") {
    console.log(stream());
  }

  // S[end] the response
  res.end();
};

// Initial our server
const server = http.createServer(listener);
const PORT = 3000;
const HOST = "localhost";

// Let our server do the job
server.listen(PORT, HOST, () => {
  console.log(`Server running on port ${PORT}`);
});
