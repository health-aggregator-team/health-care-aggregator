const express = require("express")
const cors = require("cors")
const connectDB = require("./db")
const HealthLog = require("./models/HealthLog")

const app = express()

app.use(cors())
app.use(express.json())

connectDB()

app.get("/", (req, res) => {
    res.send("Health Aggregator Server Running")
})

app.get("/health", async (req, res) => {

    const memory = process.memoryUsage().rss / 1024 / 1024

    const healthData = {
        status: "OK",
        uptime: process.uptime(),
        memoryUsage: memory.toFixed(2) + " MB",
        timestamp: new Date()
    }

    try {

        const log = new HealthLog(healthData)
        await log.save()

        res.json(healthData)

    } catch (error) {

        res.json({
            status: "ERROR",
            message: "Failed to store health log"
        })

    }

})

const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})