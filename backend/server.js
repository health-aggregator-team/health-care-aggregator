const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const connectDB = require("./db")
const healthRoutes = require("./healthRoutes")
const errorHandler = require("./errorHandler")

// Load environment configurations from root .env file
// Using path since we are running from root generally, or inside backend
dotenv.config({ path: '../.env' })
// Also try local directory fallback just in case
dotenv.config()

const app = express()

// Global Middleware
app.use(cors())
app.use(express.json())

// Connect to MongoDB
connectDB()

// MVC Application Routes API Versioning
app.use("/api/v1", healthRoutes)

// Diagnostic Check Base
app.get("/", (req, res) => {
    res.send("Health Aggregator Server Running (API is fully available at /api/v1/health)")
})

// Unhandled Endpoint Interceptor
app.use((req, res, next) => {
    const error = new Error(`API Endpoint Route Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
})

// System-wide Global Error Handling
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} stage on port ${PORT}`)
})