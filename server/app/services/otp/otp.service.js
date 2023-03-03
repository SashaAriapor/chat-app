const redisClient = require("../../configs/redis.config")

module.exports = new class AuthService {
    saveCode(phoneNumber, code) {
        redisClient.SETEX(phoneNumber, 120, code);
    }
    sendCode(phoneNumber, code) {
        console.log(code);
    }
    async getCode(phoneNumber) {
        const code = await redisClient.GET(phoneNumber);
        return code;
    }
    async checkCode(phoneNumber, code) {
        const codeAtRedis = await this.getCode(phoneNumber);
        if (codeAtRedis == code) {
            await redisClient.DEL(phoneNumber);
            return true;
        }
        else {
            return false;
        }
    }
}