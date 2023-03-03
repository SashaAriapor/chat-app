const AuthController = require("../../controllers/user/auth.controller");
const { checkValidat } = require("../../middlewares/checkValidat.middleware");
const { PhoneNumberValidator, CodeAndPhoneNumberValidator } = require("../../validators/user/otp.validator");

const router = require("express").Router();

router.post("/get-otp", PhoneNumberValidator(), checkValidat, AuthController.getOTP);
router.post("/check-otp", CodeAndPhoneNumberValidator(), checkValidat, AuthController.checkOTP);
module.exports = {
    OTPRoutes : router
}