const { check, validationResult } = require("express-validator");

exports.signUpValidatorArray = [
  check("firstName")
    .notEmpty()
    .withMessage("FirstName is required"),
  check("lastName")
    .notEmpty()
    .withMessage("LastName is required"),
  check("email")
    .isEmail()
    .withMessage("It shuold be email"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("password should be atleatd 6 character"),
];

exports.signInValidatorArray = [
  check("email")
    .isEmail()
    .withMessage("It shuold be email"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("password should be atleatd 6 character"),
];

exports.isValdationResult = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    return res.status(400).json({
      errors: errors.array()[0].msg,
    });
  }
  next();
};
