const router = require("express").Router();
const User = require("../models/User");
const userController = require("../controllers/auth");

//register user
router.post("/signup", userController.registerUser);

//login
router.post("/signin", userController.loginUser);

module.exports = router;
