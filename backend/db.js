const mongoose = require("mongoose")
require("dotenv").config()

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/healthDB"
        await mongoose.connect(mongoURI)
        console.log("MongoDB Connected Successfully to " + mongoURI)
    } catch (error) {
        console.error("MongoDB Connection Failed:", error)
        process.exit(1)
    }
}

module.exports = connectDB