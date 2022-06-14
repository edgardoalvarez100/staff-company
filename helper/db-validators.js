const { Rol, User } = require("../model");

const esRolValido = async (rol_id = "") => {
  const existeRol = await Rol.findOne({ where: { id: rol_id } });
  if (!existeRol) {
    throw new Error(`El rol ${rol_id} no esta registrado en la BD`);
  }
};

const existeEmail = async (email = "") => {
  const existeEmailDB = await User.findOne({ where: { email } });
  if (existeEmailDB) {
    throw new Error(`El correo ${email} ya esta registrado en la BD`);
  }
};

const existEmailCustomer = async (email = "") => {
  const existEmailDB = await Customer.findOne({ email });
  if (existEmailDB) {
    throw new Error(`El correo ${email} ya esta registrado en la BD`);
  }
};

const existeUsuarioPorId = async (id) => {
  const existeUsuario = await User.findById(id);
  if (!existeUsuario) {
    throw new Error(`No existe el ID, ${id} `);
  }
};

const existCategoryById = async (id) => {
  const existeCategoria = await CategoryTv.findById(id);
  if (!existeCategoria) {
    throw new Error(`No existe el ID, ${id} `);
  }

  return true;
};

const existChannelById = async (id) => {
  const exitchannel = await Channel.findById(id);
  if (!exitchannel) {
    throw new Error(`No existe el ID, ${id} `);
  }

  return true;
};

const existeProductoPorId = async (id) => {
  const existeProducto = await Producto.findById(id);
  if (!existeProducto) {
    throw new Error(`No existe el ID, ${id} `);
  }
  return true;
};

/**
 * validar colecciones permitidas
 */
const coleccionesPermitidas = (coleccion = "", colecciones = []) => {
  const incluida = colecciones.includes(coleccion);
  if (!incluida) {
    throw new Error(`La coleccion ${coleccion}, no es permitida`);
  }

  return true;
};

module.exports = {
  esRolValido,
  existeEmail,
  existEmailCustomer,
  existeUsuarioPorId,
  existChannelById,
  existCategoryById,
  existeProductoPorId,
  coleccionesPermitidas,
};
