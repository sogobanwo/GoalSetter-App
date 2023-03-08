const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getUserDetails,
} = require("../Controllers/UsersController");
const { protected } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protected, getUserDetails);

module.exports = router;
