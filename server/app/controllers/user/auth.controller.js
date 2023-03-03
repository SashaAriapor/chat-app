const otpService = require("../../services/otp/otp.service");
const { codeGenerator } = require("../../utils/codeGenerator.util");
const { StatusCodes } = require("http-status-codes");
const userService = require("../../services/user/user.service");
const { nameGenerator } = require("../../utils/nameGenerator.util");
const jwtService = require("../../services/jwt/jwt.service");

module.exports = new class AuthController {
    async getOTP(req, res, next) {
        try {
            const { phoneNumber } = req.body;
            const code = codeGenerator();
            const codeAtRedis = await otpService.getCode(phoneNumber);
            if (codeAtRedis) return res.status(StatusCodes.TOO_MANY_REQUESTS).json({
                StatusCode: StatusCodes.TOO_MANY_REQUESTS,
                data: {},
                errors: [
                    {
                        message: "wait 120s and try again"
                    }
                ]
            }) 
            await otpService.saveCode(phoneNumber, code);
            otpService.sendCode(phoneNumber, code);
            return res.status(StatusCodes.OK).json({
                StatusCode: StatusCodes.OK,
                data: {
                    phoneNumber,
                    message: "Code sent"
                },
                errors: [] 
            })
        } catch (error) {
            next(error);
        }
    }
    async checkOTP(req, res, next) {
        try {
            const { phoneNumber, code } = req.body;
            const result = await otpService.checkCode(phoneNumber, code);
            if (result) {
                const firstName = nameGenerator(phoneNumber);
                const token = jwtService.TokenGenerator({ phoneNumber });
                const user = await userService.findOrCreateUser(phoneNumber, firstName, token);
                if (user) {
                    return res.status(StatusCodes.OK).json({
                        StatusCode: StatusCodes.OK,
                        data: user,
                        errors: []
                    })                   
                }
            }
            else {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    StatusCode: StatusCodes.BAD_REQUEST,
                    data: {},
                    errors: [
                        {
                            message: "your code is wrong or expired" 
                        }
                    ]
                })
            }
        } catch (error) {
            next(error);
        }
    }
}  