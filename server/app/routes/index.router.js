const { HomeRoutes } = require("./api/home.router");
const { OTPRoutes } = require("./user/otp.router");
const { UserRoutes } = require("./user/user.router")
const router = require("express").Router();

router.use("/", HomeRoutes);
router.use("/auth", OTPRoutes);
router.use("/user", UserRoutes);
module.exports = {
    AllRoutes : router
}