const mongoose = require("mongoose");


function connectMongoDB(MONGO_URI) {
    mongoose.set('strictQuery', false);
    mongoose.connect(MONGO_URI, error => {
        if (!error) return console.log("connected to MongoDB successfully");
        return console.log(error.message);
    });
    mongoose.connection.on("disconnected", () => {
        console.log("mongoose connection is disconnected");
    });
    process.on("SIGINT", async () => {
        await mongoose.connection.close();
        console.log("disconnected");
        process.exit(0);
    });
}

module.exports = {
    connectMongoDB
}