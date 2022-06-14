const { response } = require("express");
const User = require("../model/user");
const bcryptjs = require("bcryptjs");
const { generarJWT } = require("../helper/generar-jwt");
// const googleVerify = require("../helper/google-verify");

const login = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    //verificar si el email existe
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Email / Password no son correctos" });
    }
    //si el user esta activo
    if (!user.status) {
      return res.status(400).json({ msg: "Email / Password no son correctos" });
    }
    //verificar la contraseña
    const validPassword = bcryptjs.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ msg: "Email / Password no son correctos" });
    }
    //generar el JWT
    const token = await generarJWT(user.id, "3d");
    res.json({ user, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "hable con el admininistrador" });
  }
};

const googleSignIn = async (req, res = response) => {
  // const { id_token } = req.body;
  // try {
  //   const { name, img, email } = await googleVerify(id_token);
  //   let user = await User.findOne({ email });
  //   // Si el user no existe
  //   if (!user) {
  //     // Tengo que crearlo
  //     const data = {
  //       name,
  //       email,
  //       password: ":P",
  //       img,
  //       google: true,
  //     };
  //     user = new User(data);
  //     await user.save();
  //   }
  //   if (!user.estado) {
  //     return res
  //       .status(401)
  //       .json({ msg: "Hable con el administrador, cuenta bloqueada" });
  //   }
  //   //generar el JWT
  //   const token = await generarJWT(user.id);
  //   res.json({ user, token });
  // } catch (error) {
  //   console.log(error);
  //   return res.status(400).json({ msg: "El token no se pudo verificar" });
  // }
};

module.exports = { login, googleSignIn };
