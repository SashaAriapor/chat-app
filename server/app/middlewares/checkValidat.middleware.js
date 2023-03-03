const { validationResult } = require("express-validator");
const { StatusCodes } = require("http-status-codes");

function checkValidat(req, res, next) {
    const result = validationResult(req);
    if(!Object.keys(result?.errors).length == 0) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            StatusCode: StatusCodes.BAD_REQUEST,
            data: {},
            errors: result
        })
    }
    next();
}

module.exports = {
    checkValidat
}