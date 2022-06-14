const { request, response } = require("express");

const esAdminRole = (req = request, res = response, next) => {
  if (!req.usuario) {
    return res.status(500).json({
      msg: "se quiere verificar el role sin validar primero el token",
    });
  }

  const { rol, nombre } = req.usuario;
  if (rol !== "ADMIN_ROLE") {
    return res
      .status(401)
      .json({ msg: `${nombre} no tiene permisos de Administrador` });
  }

  next();
};

const tieneRole = (...roles) => {
  return (req, res = response, next) => {
    if (!req.user) {
      return res.status(500).json({
        msg: "se quiere verificar el role sin validar primero el token",
      });
    }

    if (!roles.includes(req.user.rol)) {
      return res
        .status(401)
        .json({ msg: `El servicio requiere uno de estos roles ${roles}` });
    }
    next();
  };
};

module.exports = { esAdminRole, tieneRole };
