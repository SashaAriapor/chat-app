const { validationResult } = require("express-validator");
const { StatusCodes } = require("http-status-codes");
const fs = require("fs");
function checkValidatFile(req, res, next) {
    const result = validationResult(req);
    if(!Object.keys(result?.errors).length == 0) {
        if (req.file) fs.unlinkSync(req.file.path); 
        return res.status(StatusCodes.BAD_REQUEST).json({
            StatusCode: StatusCodes.BAD_REQUEST,
            data: {},
            errors: result
        })
    }
    next();
}

module.exports = {
    checkValidatFile
}