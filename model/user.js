const { DataTypes, Deferrable } = require("sequelize");

const { sequelize } = require("../database/config");
const Rol = require("./rol");

const User = sequelize.define(
  "User",
  {
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    status: { type: DataTypes.INTEGER },
  },
  { underscored: true }
);
User.Rol = User.belongsTo(Rol, { foreignKey: "rol_id" }); // A BelongsTo B
Rol.Users = Rol.hasMany(User);
module.exports = User;
