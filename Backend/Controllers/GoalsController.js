const asyncHandler = require("express-async-handler")

const Goal = require("../Models/goalsModel")
// @desc     get all goals
// @Route    GET /api/goals
// @access   Private
const getGoals = asyncHandler(async(req, res) => {
const goals = await Goal.find()

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
    goal: req.body.goal
  })


  res.status(200).json(newGoal);
});

// @desc     Update a goal

// @Route    PUT /api/goals/:id
// @access   Private
const updateGoal = asyncHandler (async(req, res) => {
  res.status(200).json({
    Message: `Update Goal ${req.params.id}`,
  });
});

// @desc     Delete a goal
// @Route    DELETE /api/goals/:id
// @access   Private
const deleteGoal =asyncHandler (async(req, res) => {
  res.status(200).json({
    Message: `delete Goal ${req.params.id}`,
  });
}); 

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};


