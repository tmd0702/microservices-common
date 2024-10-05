"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStatus = void 0;
var UserStatus;
(function (UserStatus) {
    UserStatus["WAITING_FOR_VERIFICATION"] = "awaiting:verification";
    UserStatus["WAITING_FOR_FACE_REGISTRATION"] = "awaiting:face-registration";
    UserStatus["ACTIVE"] = "active";
    UserStatus["INACTIVE"] = "inactive";
})(UserStatus || (exports.UserStatus = UserStatus = {}));
