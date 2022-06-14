const express = require("express");
const { dbConnection, sequelize } = require("../database/config");

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

  async connectDB() {
    await dbConnection();
    await sequelize.sync();
    console.log("All models were synchronized successfully.");
  }

  middlewares() {
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/api/users", require("../router/users"));
    this.app.use("/api/auth", require("../router/auth"));
  }

  init() {
    this.app.listen(this.port, () => {
      console.log(`listening on port ${this.port}`);
    });
  }
}
module.exports = Server;
