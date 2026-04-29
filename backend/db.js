// const mongoose = require("mongoose")
// require("dotenv").config()

// const connectDB = async () => {
//     try {
//         const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/healthDB"
//         await mongoose.connect(mongoURI)
//         console.log("MongoDB Connected Successfully to " + mongoURI)
//     } catch (error) {
//         console.error("MongoDB Connection Failed:", error)
//         process.exit(1)
//     }
// }

// module.exports = connectDB

const mongoose = require("mongoose");
require("dotenv").config();

/**
 * Establishes a connection to MongoDB using Mongoose.
 * Includes event listeners for connection monitoring.
 */
const connectDB = async () => {
    const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/healthDB";

    try {
        const connectionInstance = await mongoose.connect(mongoURI);
        
        console.log(`\n✅ MongoDB Connected! Host: ${connectionInstance.connection.host}`);
        
        // Listen for connection errors after initial connection
        mongoose.connection.on("error", (err) => {
            console.error(`❌ MongoDB Runtime Error: ${err}`);
        });

    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
