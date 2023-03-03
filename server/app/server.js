const { connectMongoDB } = require("./configs/mongodb.config");
const { expressConfig } = require("./configs/express.config");
const { swaggerConfig } = require("./configs/swagger.config");
const { errorHandler } = require("./configs/errorHandler.config")
const { AllRoutes } = require("./routes/index.router");
const express = require("express");
const http = require("http");

module.exports = async function server (PORT, MONGO_URI) {
    await require("./configs/redis.config");
    await connectMongoDB(MONGO_URI);

    const app = express();

    expressConfig(app);
    swaggerConfig(app, PORT);

    app.use("/", AllRoutes);
    errorHandler(app);
    
    const server = http.createServer(app);
    server.listen(PORT, () => {
        console.log(`Server is Running >> http://localhost:${PORT}`);
    });

};
