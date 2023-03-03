const { StatusCodes } = require("http-status-codes");
const { updateUserProfile } = require("../../services/user/user.service");
const fs = require("fs");
const path = require("path");

module.exports = new class UserController {
    getProfile(req, res, next) {
        try {
            const user = req.user;
            res.status(StatusCodes.OK).json({
                StatusCode: StatusCodes.OK,
                data: user,
                errors : []
            })
        } catch (error) {
            next(error);
        }
    }
    async updateProfile(req, res, next) {
        try {
            const { phoneNumber } = req.user;
            const { bio, firstName, lastName } = req.body;
            const data = { bio, firstName, lastName };
            const user = await updateUserProfile(phoneNumber, data);
            res.status(StatusCodes.OK).json({
                StatusCode: StatusCodes.OK,
                data: user,
                errors: []
            });
        } catch (error) {
            next(error);
        }
    }
    async updateProfileImage(req, res, next) {
        try {
            const { phoneNumber, profile_image } = req.user;
            const imagePath = `./uploads/profile_images/${path.basename(req.file?.path)}`;
            const data = { profile_image: imagePath };
            const user = await updateUserProfile(phoneNumber, data);
            if (profile_image.startsWith("./uploads")) {
                const profileImagePath = path.join(__dirname, "..", "..", "..", "public", profile_image.slice(2));
                fs.unlinkSync(profileImagePath);
            }
            res.status(StatusCodes.OK).json({
                statusCode: StatusCodes.OK,
                data: user,
                errors: []
            })
        } catch (error) {
            next(error);
        }
    }
    async deleteProfileImage(req, res, next) {
        try {
            const { phoneNumber, profile_image } = req.user;
            if (profile_image.startsWith("./uploads")) {
                const defualtProfile = "./defaults/profile_image.png";
                const profileImagePath = path.join(__dirname, "..", "..", "..", "public", profile_image.slice(2));
                const data = { profile_image: defualtProfile };
                const user = await updateUserProfile(phoneNumber, data);
                fs.unlinkSync(profileImagePath);
                return res.status(StatusCodes.ACCEPTED).json({
                    statusCode: StatusCodes.ACCEPTED,
                    data: user,
                    error: []
                })
            } else {
                return res.status(StatusCodes.NOT_ACCEPTABLE).json({
                    StatusCode : StatusCodes.NOT_ACCEPTABLE,
                    data: {},
                    errors: [
                        { message: "you dont have any profile image to remove that" }
                    ]
                })
            }
        } catch (error) {
            next(error);
        }
    }
}