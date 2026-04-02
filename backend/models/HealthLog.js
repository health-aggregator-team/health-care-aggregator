const mongoose = require("mongoose")

const healthSchema = new mongoose.Schema({
    status: String,
    uptime: Number,
    memoryUsage: String,
    timestamp: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("HealthLog", healthSchema)