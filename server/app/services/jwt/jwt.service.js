const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");
module.exports = new class JWTService {
    TokenGenerator(payload) {
        const token = jwt.sign(payload,process.env.SECRET_KEY, { expiresIn: "7 day" });
        return token;
    }
    verifyToken(token) {
        try {
            const result = jwt.verify(token, process.env.SECRET_KEY);
            if(!result?.phoneNumber) throw { 
                StatusCode: StatusCodes.UNAUTHORIZED,
                data: {},
                errors: [
                    { message: "Login to your Account" }
                ]
             }
             return result;
        } catch (error) {
            throw { 
                StatusCode: StatusCodes.UNAUTHORIZED,
                data: {},
                errors: [
                    { message: "Login to your Account" }
                ]
             }
        }
    }
}