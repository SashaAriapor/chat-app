const { body } = require("express-validator");
const path = require("path");
function updateProfileValidator() {
    return [
        body("firstName").custom((value, ctx) => {
            if(!value) throw "field first name can,t empty"
            if(!(value.length < 12)) throw "field first name length must between 1 and 12";
            return true;
        }),
        body("lastName").custom((value, ctx) => {
            if(!(value.length < 12)) throw "field last name length must between 0 and 12";
            return true;
        })      
    ]
}
function updateProfileImageValidator() {
    return [
        body("image").custom((value, {req}) => {
            if (!(req.file)) throw "plese select one image and send it";
            const fileFromat = path.extname(req.file.originalname);
            const correctFormats = [".png", ".jpg", ".svg", ".jpeg", ".gif", ".webp"];
            if (!correctFormats.includes(fileFromat)) throw "The file sent is not correct";
            return true;
        })
    ]
}
function updateUsernameValidator() {
    return [
        body("username").custom((value, ctx) => {
            if(value.length < 3) throw "username is too short";
            if(value.length > 12) throw "username is too long";
            return true;
        }) 
    ]
}


module.exports = {
    updateProfileValidator,
    updateProfileImageValidator,
    updateUsernameValidator
}