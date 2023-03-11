const { validationResult } = require("express-validator");
const { StatusCodes } = require("http-status-codes");
const fs = require("fs");
function checkValidatFile(req, res, next) {
    const result = validationResult(req);
    let errors = [];
    result.errors.forEach(error => {
        const errorNessage = error.msg;
        errors.push(errorNessage);
    });
    errors = [...new Set(errors)];
    if(!Object.keys(result?.errors).length == 0) {
        if (req.file) fs.unlinkSync(req.file.path); 
        return res.status(StatusCodes.BAD_REQUEST).json({
            StatusCode: StatusCodes.BAD_REQUEST,
            data: {},
            errors: errors
        })
    }
    next();
}

module.exports = {
    checkValidatFile
}