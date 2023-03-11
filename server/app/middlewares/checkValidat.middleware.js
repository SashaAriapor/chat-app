const { validationResult } = require("express-validator");
const { StatusCodes } = require("http-status-codes");

function checkValidat(req, res, next) {
    const result = validationResult(req);
    let errors = [];
    result.errors.forEach(error => {
        const errorNessage = error.msg;
        errors.push(errorNessage);
    });
    errors = [...new Set(errors)];
    if(!Object.keys(result?.errors).length == 0) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            StatusCode: StatusCodes.BAD_REQUEST,
            data: {},
            errors: errors
        })
    }
    next();
}

module.exports = {
    checkValidat
}