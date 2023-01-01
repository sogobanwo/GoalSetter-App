const express = require("express")
const dotenv = require("dotenv").config()
const colors = require("colors")
const {errorHandler} = require("./middleware/errorMiddleware")
const connectDB = require("./Config/db")
const port = process.env.PORT

connectDB()

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// base route
app.use("/api/goals", require("./Routes/GoalRoutes"))
app.use("/api/users", require("./Routes/userRoutes"))

// errorHandler
app.use(errorHandler)

app.listen(port, ()=> console.log(`Your app is running on port ${port}`))

