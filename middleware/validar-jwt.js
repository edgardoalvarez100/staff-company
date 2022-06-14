const { response, request } = require("express");
const jwt = require("jsonwebtoken");
const { User } = require("../model");

const validarJWT = async (req = request, res = response, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({ msg: "no hay token en la peticion" });
  }

  try {
    const { uid } = jwt.verify(token, process.env.JWT_KEY);

    const user = await User.findById(uid);
    req.user = user;

    if (!user) {
      return res
        .status(401)
        .json({ msg: "Token no valido - usuario no existe en DB" });
    }

    //verificar si el estado es false
    if (!user.status) {
      return res
        .status(401)
        .json({ msg: "Token no valido - usuario eliminado" });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: "Token no valido" });
  }
};

module.exports = { validarJWT };
