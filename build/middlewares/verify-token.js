"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const config = require('config');
const verifyToken = (req, res, next) => {
    let token = req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    else if (token.startsWith('Bearer ')) {
        token = token.substring(7);
    }
    try {
        const decoded = jwt.verify(token, config.get('AUTH.JWT.ACCESS_TOKEN.PRIVATE_KEY'));
    }
    catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};
module.exports = {
    verifyToken
};
