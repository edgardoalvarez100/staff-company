const { DataTypes } = require("sequelize");

const { sequelize } = require("../database/config");

const User = sequelize.define("User", {
  name: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  status: { type: DataTypes.BOOLEAN },
});

module.exports = User;
