const express = require("express")
const router = express.Router()

const {getGoals, setGoal, updateGoal, deleteGoal, getAGoal} = require("../Controllers/GoalsController")
const {protected} = require("../middleware/authMiddleware")

router.route("/").get(protected, getGoals).post(protected, setGoal)

router.route("/:id").put(protected, updateGoal).delete(protected, deleteGoal).get(protected, getAGoal)


module.exports = router