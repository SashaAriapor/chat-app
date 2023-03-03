const userService = require("../../services/user/user.service");

module.exports = new class HomeController {
    indexPage(req, res, next) {
        try {
            return res.status(200).send("Index Page ChatApp");
        } catch (error) {
            next(error);
        }
    }
};