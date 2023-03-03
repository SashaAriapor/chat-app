const HomeController = require("../../controllers/api/home.controller");
const { verifyToken } = require("../../middlewares/verifyToken.middleware");

const router = require("express").Router();

router.get("/", verifyToken, HomeController.indexPage);

module.exports = {
    HomeRoutes : router
}
