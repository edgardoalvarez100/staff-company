const validateFields = require("../middleware/validate-fields");
const validaRoles = require("../middleware/validar-roles");
const validaJWT = require("../middleware/validar-jwt");

module.exports = {
  ...validateFields,
  ...validaRoles,
  ...validaJWT,
};
