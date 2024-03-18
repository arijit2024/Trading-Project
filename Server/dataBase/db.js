const mongoose = require("mongoose");

const URL  = process.env.MONGODB_URL;

 const connectionDb = async () => {
    try {
        await mongoose.connect(URL);
        console.log("database connection success")
    } catch (error) {
        console.error("database connection failed");
        process.exit(0);
    }
 }

 module.exports = connectionDb;