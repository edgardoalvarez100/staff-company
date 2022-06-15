const { response } = require("express");
const bcryptjs = require("bcryptjs");
const { Rol, User } = require("../model");

const usersGet = async (req, res = response) => {
  const { limit = 5, from = 0 } = req.query;
  const query = { status: true, limit, offset: from };

  const [total, users] = await Promise.all([
    User.count(query),
    User.findAll({ include: { model: Rol, attributes: ["id", "name"] } }),
  ]);
  res.json({ total, users });
};

const usersPost = async (req, res = response) => {
  let { name, email, password, rol_id } = req.body;

  //encriptar contraseña
  const salt = bcryptjs.genSaltSync();
  password = bcryptjs.hashSync(password, salt);

  const user = await User.create(
    { name, email, password, status: 1, rol_id },
    {
      include: [
        {
          model: Rol,
        },
      ],
    }
  );

  res.json({ user });
};

const userPostAdmin = async (req, res = response) => {
  const { name, email, password, rol_id } = req.body;
  const user = new User({ name, email, password, rol_id });

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
