const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");

// @desc     Register a user
// @Route    POST /api/users
// @access   Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please fill all input fields");
  }

  // check if user exist
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already Exists");
  }

  // hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user Data");
  }
});




// @desc     Login User
// @Route    POST /api/users/login
// @access   Public
const loginUser = asyncHandler(async (req, res) => {
  const {email, password} = req.body;

  // check if user exist
  const userExist = await User.findOne({ email });
  
  // compare passwords
  if(userExist && (await bcrypt.compare(password, userExist.password))){
    res.status(201).json({
      _id: userExist.id,
      name: userExist.name,
      email: userExist.email,
    });
  } else{
    res.status(400);
    throw new Error("Invalid user Data");
  }
});




// @desc     Get user Details
// @Route    GET /api/users/me
// @access   Private
const getUserDetails = asyncHandler(async (req, res) => {
  // if(!req.body.userInfo){
  //   res.status(400)
  //   throw new Error("Please add all required information")
  // }

  // const newUser = await Goal.create({
  //   goal: req.body.goal
  // })

  res.status(200).json({
    message: "Gotten User Details",
  });
});

module.exports = {
  getUserDetails,
  registerUser,
  loginUser,
};
