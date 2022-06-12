const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;

    //Conecction DB
    this.connectDB();

    //Middlewares
    this.middlewares();

    //Routes
    this.routes();
  }
  connectDB() {}
  middlewares() {}
  routes() {
    this.app.use("/api/users", require("../router/users"));
    this.app.use("/api/auth", require("../router/auth"));
  }

  init() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}`);
    });
  }
}
module.exports = Server;
