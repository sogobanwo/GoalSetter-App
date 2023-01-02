const asyncHandler = require("express-async-handler")

const Goal = require("../Models/goalsModel")
const User = require("../Models/userModel")

// @desc     get all goals
// @Route    GET /api/goals
// @access   Private
const getGoals = asyncHandler(async(req, res) => {
const goals = await Goal.find({user: req.user.id})

  res.status(200).json(goals);
});

// @desc     Set a goal
// @Route    POST /api/goals
// @access   Private
const setGoal =asyncHandler(async (req, res) => {
  if(!req.body.goal){
    res.status(400)
    throw new Error("Please add a goal")
  }

  const newGoal = await Goal.create({
    goal: req.body.goal,
    user: req.user.id
  })


  res.status(200).json(newGoal);
});

// @desc     Update a goal

// @Route    PUT /api/goals/:id
// @access   Private
const updateGoal = asyncHandler (async(req, res) => {
  const goal = await Goal.findById(req.params.id)

  if(!goal){
    res.status(400)
    throw new Error("Goal not found")
  }

  const user = await User.findById(req.user.id)

  // Check for user
  if(!user){
    res.status(400)
    throw new Error("User not found")
  }

  // Check if the loggedIn user is the same as the goal user
  if(goal.user.toString() !== user.id){
    res.status(401)
    throw new Error("User not Authorized")
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})

  res.status(200).json(updatedGoal);
});

// @desc     Delete a goal
// @Route    DELETE /api/goals/:id
// @access   Private
const deleteGoal =asyncHandler (async(req, res) => {
  const goal = await Goal.findById(req.params.id)

  if(!goal){
    res.status(400)
    throw new Error("Goal not found")
  }

  const user = await User.findById(req.user.id)

  // Check for user
  if(!user){
    res.status(400)
    throw new Error("User not found")
  }

  // Check if the loggedIn user is the same as the goal user
  if(goal.user.toString() !== user.id){
    res.status(401)
    throw new Error("User not Authorized")
  }


   await goal.remove()
  res.status(200).json({id: req.params.id});
}); 

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};


