const { DataTypes } = require("sequelize");

const { sequelize } = require("../database/config");

const Rol = sequelize.define(
  "Rol",
  {
    name: { type: DataTypes.STRING },
  },
  { underscored: true }
);

module.exports = Rol;
