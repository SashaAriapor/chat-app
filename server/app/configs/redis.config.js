const redis = require("redis");
const redisClient = redis.createClient();
redisClient.connect();
redisClient.on("ready", () => console.log("connected to redis successfuly"));
redisClient.on("error", (err) => {
    console.log("RedisError: ", err.message);
    process.on("SIGINT", async () => {
        process.exit(0);
    });
}); 
redisClient.on("end", () => console.log("disconnected from redis...."))

module.exports = redisClient;