const express = require("express")
const dotenv = require("dotenv").config()
const {errorHandler} = require("./middleware/errorMiddleware")
const port = process.env.PORT

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// base route
app.use("/api/goals", require("./Routes/GoalRoutes"))

// errorHandler
app.use(errorHandler)

app.listen(port, ()=> console.log(`Your app is running on port ${port}`))

