const express = require("express");
const { signUp, signIn } = require("../controller/auth");
const {
  isValdationResult,
  signUpValidatorArray,
  signInValidatorArray,
} = require("../validator/auth");
const router = express.Router();
router.post("/signin", signInValidatorArray, isValdationResult, signIn);

router.post("/signup", signUpValidatorArray, isValdationResult, signUp);

/* router.post("/profile", requireSignIn, (req, res) =>
  res.status(200).json({ user: "next is working" })
); */

module.exports = router;
