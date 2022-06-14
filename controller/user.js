const { response } = require("express");
const User = require("../model/user");
const bcryptjs = require("bcryptjs");

const usersGet = async (req, res = response) => {
  const { limit = 5, from = 0 } = req.query;
  const query = { status: true, limit, offset: from };

  const [total, users] = await Promise.all([
    User.count(query),
    User.findAll(query),
  ]);
  res.json({ total, users });
};

const usersPost = async (req, res = response) => {
  const { name, email, password, rol_id } = req.body;
  const user = new User({ name, email, password, rol_id });

  //encriptar contraseña
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);

  await user.save();

  res.json({ user });
};

const userPostAdmin = async (req, res = response) => {
  const { name, email, password, rol } = req.body;
  const user = new User({ name, email, password, rol });

  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);

  await user.save();

  res.json({ user });
};

const usersPut = async (req, res = response) => {
  const { id } = req.params;
  const { _id, password, google, email, ...resto } = req.body;

  //TODO validar contra base de datos

  if (password) {
    //encriptar contraseña
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(password, salt);
  }

  const user = await User.findByIdAndUpdate(id, resto, { new: true });

  res.json({ user });
};

const usersDelete = async (req, res = response) => {
  const { id } = req.params;

  //Borrado fisicamente
  // const user = await User.findByIdAndDelete(id);

  const userAuthenticated = req.user;

  //Borrado logico
  const user = await User.findByIdAndUpdate(id, { status: false });

  res.json({ user, userAuthenticated });
};

module.exports = { usersGet, usersDelete, usersPost, userPostAdmin, usersPut };
