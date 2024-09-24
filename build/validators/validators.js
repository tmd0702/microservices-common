"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const PasswordValidator = require('password-validator');
const validator = require('validator');
function isEmailValid(email) {
    const emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    let isValid = {
        valid: true,
        message: ''
    };
    if (!email) {
        isValid.valid = false;
        isValid.message = "Email is required";
    }
    if (email.length > 254) {
        isValid.valid = false;
        isValid.message = "Email length must <= 254";
    }
    var valid = emailRegex.test(email);
    if (!valid) {
        isValid.valid = false;
        isValid.message = "Invalid email";
    }
    var parts = email.split("@");
    if (parts[0].length > 64) {
        isValid.valid = false;
        isValid.message = "Invalid email";
    }
    var domainParts = parts[1].split(".");
    if (domainParts.some(function (part) { return part.length > 63; })) {
        isValid.valid = false;
        isValid.message = "Invalid email";
    }
    return isValid;
}
function isUsernameValid(username) {
    let isValid = {
        valid: true,
        message: ''
    };
    if (username.length < 6 || username.length > 20) {
        isValid.valid = false;
        isValid.message = "Username length must >= 6 and <= 20";
    }
    if (!validator.matches(username, "^[a-zA-Z0-9\-]*$")) {
        isValid.valid = false;
        isValid.message = "Username must only contains a-z, A-Z, 0-9, -";
    }
    if (username.charAt(0) == '-') {
        isValid.valid = false;
        isValid.message = "Username must not start with -";
    }
    return isValid;
}
function isPasswordValid(password) {
    let isValid = {
        valid: true,
        message: ''
    };
    const passwordValidator = new PasswordValidator();
    passwordValidator
        .is().min(8) // Minimum length 8
        .is().max(25) // Maximum length 25
        .has().uppercase() // Must have uppercase letters
        .has().lowercase() // Must have lowercase letters
        .has().digits() // Must have at least 2 digits
        .has().not().spaces() // Should not have spaces
        .has().symbols();
    let validateResults = passwordValidator.validate(password, { details: true });
    isValid.valid = validateResults.length === 0;
    if (!isValid.valid) {
        for (let result of validateResults) {
            isValid.message += result.message.replace("The string", "Password") + '. ';
        }
        isValid.message = isValid.message.trim();
    }
    return isValid;
}
function isOAuthSignUpDataValid(username) {
    let isValid = {
        valid: true,
        message: ''
    };
    const validUsername = isUsernameValid(username);
    if (validUsername.valid === false) {
        isValid.valid = false;
        isValid.message = validUsername.message;
    }
    return isValid;
}
function isSignUpDataValid(email, password, username) {
    return __awaiter(this, void 0, void 0, function* () {
        let isValid = {
            valid: true,
            message: ''
        };
        const validUsername = isUsernameValid(username);
        if (validUsername.valid === false) {
            isValid.valid = false;
            isValid.message = "Please provide a valid username.";
        }
        else {
            const validEmail = isEmailValid(email);
            if (validEmail.valid === false) {
                isValid.valid = false;
                isValid.message = "Please provide a valid email address.";
            }
            else {
                const validPassword = isPasswordValid(password);
                isValid.valid = validPassword.valid;
                isValid.message = validPassword.message;
            }
        }
        return isValid;
    });
}
module.exports = {
    isSignUpDataValid,
    isPasswordValid,
    isUsernameValid,
    isOAuthSignUpDataValid,
    isEmailValid
};
