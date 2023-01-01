const express = require("express")
const router = express.Router()

const {registerUser, loginUser, getUserDetails} = require("../Controllers/UsersController")

router.route("/").post(registerUser)
router.route("/login").post(loginUser)
router.route("/me").get(getUserDetails)

module.exports = router