const userController = require("../../controllers/user/user.controller");
const { checkValidat } = require("../../middlewares/checkValidat.middleware");
const { checkValidatFile } = require("../../middlewares/checkValidatFile.middleware");
const { verifyToken } = require("../../middlewares/verifyToken.middleware");
const userService = require("../../services/user/user.service");
const { uploadFile } = require("../../utils/uploadFile.util");
const { updateProfileValidator, updateProfileImageValidator, updateUsernameValidator } = require("../../validators/user/user.validator");

const router = require("express").Router();

router.get("/get-profile", verifyToken, userController.getProfile);
router.post("/update-profile", verifyToken, updateProfileValidator(), checkValidat, userController.updateProfile);
router.post("/update-profile-image", verifyToken, uploadFile("profile_images").single("image"),
 updateProfileImageValidator(), checkValidatFile, userController.updateProfileImage);
router.get("/delete-profile-image", verifyToken, userController.deleteProfileImage);
router.post("/update-username", verifyToken, updateUsernameValidator(), checkValidat, userController.editUsername);

module.exports = {
   UserRoutes: router 
}