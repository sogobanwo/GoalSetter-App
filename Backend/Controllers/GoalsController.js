const asyncHandler = require("express-async-handler")


// @desc     get all goals
// @Route    GET /api/goals
// @access   Private
const getGoals = asyncHandler(async(req, res) => {
  res.status(200).json({
    Message: "Get All Goals",
  });
});

// @desc     Set a goal
// @Route    POST /api/goals
// @access   Private
const setGoal =asyncHandler(async (req, res) => {
  if(!req.body.goal){
    res.status(400)
    throw new Error("Please add a text field")
  }
  res.status(200).json({
    Message: "Set a Goal",
  });
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


