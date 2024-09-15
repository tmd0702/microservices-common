import {InvalidTokenError} from "../errors/invalid-token";

const jwt = require("jsonwebtoken");
const config = require('config');
import { Request, Response, NextFunction } from 'express';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    let token =
        req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization;
    if (!token) {
        return res.status(403).send("A token is required for authentication");
    } else if (token.startsWith('Bearer ')) {
        token = token.substring(7);
    }
    try {
        const decoded = jwt.verify(token, config.get('AUTH.JWT.ACCESS_TOKEN.PRIVATE_KEY'));
    } catch (err: unknown) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};

module.exports = {
    verifyToken
}