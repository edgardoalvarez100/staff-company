const { Sequelize } = require("sequelize");
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
  }
);

const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("base de datos online");
  } catch (error) {
    console.log(error);
    throw new Error("Error en database initialization");
  }
};

module.exports = {
  dbConnection,
};
