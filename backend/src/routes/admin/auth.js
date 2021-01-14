const express = require("express");
const { signUp, signIn } = require("../../controller/admin/auth");
const {
  signInValidatorArray,
  isValdationResult,
  signUpValidatorArray,
} = require("../../validator/auth");
const router = express.Router();

router.post("/admin/signin", signInValidatorArray, isValdationResult, signIn);

router.post("/admin/signup", signUpValidatorArray, isValdationResult, signUp);

module.exports = router;
