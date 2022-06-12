const { Router } = require("express");
const { check } = require("express-validator");

// const {
//   usersGet,
//   usersPost,
//   usersPut,
//   usersDelete,
//   usersPatch,
// } = require("../controller/users");
// const {
//   esRolValido,
//   existeEmail,
//   existeUsuarioPorId,
// } = require("../helper/db-validators.js");

// const {
//   validarCampos,
//   tieneRole,
//   validarJWT,
//   esAdminRole,
// } = require("../middleware");

const router = Router();

// router.get("/", usersGet);
// router.post(
//   "/",
//   [
//     check("name", "El nombre es requerido").notEmpty(),
//     check("password", "El password debe ser mayor a 6 caracteres").isLength({
//       min: 6,
//     }),
//     check("email", "El correo no es valido").isEmail(),
//     check("email").custom(existeEmail),
//     // check('rol','No es un rol valido').isIn(["ADMIN_ROLE","USER_ROLE"]),
//     check("rol").custom(esRolValido),
//     validarCampos,
//   ],
//   usersPost
// );
// router.put(
//   "/:id",
//   [
//     check("id", "No es un ID valido").isMongoId(),
//     check("id").custom(existeUsuarioPorId),
//     check("rol").custom(esRolValido),
//     validarCampos,
//   ],
//   usersPut
// );
// router.delete(
//   "/:id",
//   [
//     validarJWT,
//     tieneRole("ADMIN_ROLE", "VENTAS_ROLE"),
//     // esAdminRole,
//     check("id", "No es un ID valido").isMongoId(),
//     check("id").custom(existeUsuarioPorId),
//     validarCampos,
//   ],
//   usersDelete
// );

module.exports = router;
