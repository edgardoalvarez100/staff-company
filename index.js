require("dotenv").config();

const Server = require("./server");
let server = new Server();
server.init();
