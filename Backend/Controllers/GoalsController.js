// @desc     get all goals
// @Route    GET /api/goals
// @access   Private
const getGoals = (req, res) => {
  res.status(200).json({
    Message: "Get All Goals",
  });
};

// @desc     Set a goal
// @Route    POST /api/goals
// @access   Private
const setGoal = (req, res) => {
  if(!req.body.text){
    res.status(400).json({
      message: "Please input a text"
    })
  }
  res.status(200).json({
    Message: "Set a Goal",
  });
};

// @desc     Update a goal
// @Route    PUT /api/goals/:id
// @access   Private
const updateGoal = (req, res) => {
  res.status(200).json({
    Message: `Update Goal ${req.params.id}`,
  });
};

// @desc     Delete a goal
// @Route    DELETE /api/goals/:id
// @access   Private
const deleteGoal = (req, res) => {
  res.status(200).json({
    Message: `delete Goal ${req.params.id}`,
  });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};


