const { Router } = require("express");
const { check } = require("express-validator");

// const { login, googleSignIn } = require("../controller/auth");
// const { validateFields } = require("../middleware/validate-fields");

const router = Router();

// router.post(
//   "/login",
//   [
//     check("email", "El correo no es valido").isEmail(),
//     check("password", "El password es obligatoria").notEmpty(),
//     validateFields,
//   ],
//   login
// );
// router.post(
//   "/google",
//   [check("id_token", "id_token es requerido").notEmpty(), validateFields],
//   googleSignIn
// );

module.exports = router;
