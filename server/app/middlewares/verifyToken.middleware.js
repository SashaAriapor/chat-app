const { StatusCodes } = require("http-status-codes");
const jwtService = require("../services/jwt/jwt.service");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();



async function verifyToken (req, res, next) {
    try {
        const authError = { 
            StatusCode: StatusCodes.UNAUTHORIZED,
            data: {},
            errors: [
                { message: "Login to your Account" }
            ]
        }
        const autorization = req?.headers?.authorization;
        if(!autorization) throw authError
        if(!autorization) throw authError;
        const token = autorization.split(" ")?.[1];
        if(!token)  throw authError;
        const result = jwtService.verifyToken(token);
        const { phoneNumber } = result;
        const user = await prisma.user.findFirst({ where: { phoneNumber }});
        if(!user) throw authError;
        req.user = user;
        return next();
    } catch (error) {
        next(error);
    }
}

module.exports = {
    verifyToken
}