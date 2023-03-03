const createError = require("http-errors");

function errorHandler(app) {
    app.use((req, res, next) => {
        next(createError.NotFound("routes was not found"));
    });
    app.use((error, req, res, next) => {
        const serverError = createError.InternalServerError();
        const statusCode = error.StatusCode || serverError.status;
        const errors = error.errors || serverError.message;
        return res.status(statusCode).json({
            statusCode,
            data: {},
            errors
        });
    });
}

module.exports = {
    errorHandler
}