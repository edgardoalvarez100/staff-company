const { DataTypes, Deferrable } = require("sequelize");

const { sequelize } = require("../database/config");
const Rol = require("./rol");

const User = sequelize.define("User", {
  name: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  status: { type: DataTypes.INTEGER },
});
User.Rol = User.belongsTo(Rol); // A BelongsTo B
Rol.Users = Rol.hasMany(User);
module.exports = User;
