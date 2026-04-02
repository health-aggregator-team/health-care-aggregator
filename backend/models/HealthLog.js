const mongoose = require("mongoose")

const healthSchema = new mongoose.Schema({

    overallStatus: String,

    memoryStatus: String,

    diskStatus: String,

    uptime: Number,

    memoryUsage: String,

    diskUsage: String,

    timestamp: {
        type: Date,
        default: Date.now
    }

})

module.exports =
    mongoose.model("HealthLog", healthSchema)