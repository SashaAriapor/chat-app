const { body } = require("express-validator");

function PhoneNumberValidator() {
    return [
        body("phoneNumber").custom((value, ctx) => {
            if (!value) throw "No phone number entered";
            if(!value.startsWith("+98")) throw "phone number is not supported"; 
            if(!(value.length == 13)) throw "your phone number is not supported";
            return true;
        })
    ]
}

function CodeAndPhoneNumberValidator(){
    return [
        body("phoneNumber").custom((value, ctx) => {
            if (!value) throw "No phone number entered";
            if(!value.startsWith("+98")) throw "your code is wrong or expired"; 
            if(!(value.length == 13)) throw "your code is wrong or expired";
            return true;
        }),
        body("code").custom((value, ctx) => {
            if (!value) throw "No code entered";
            if(!(value.length == 6)) throw "your code is wrong or expired";
            const codeValidRegex = /^\d+$/;
            if (!(codeValidRegex.test(value))) throw "your code is wrong or expired";
            return true;
        })
    ]
} 

module.exports = {
    PhoneNumberValidator,
    CodeAndPhoneNumberValidator
}