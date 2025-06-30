"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("./config");
const userMiddleware = (req, res, next) => {
    const header = req.headers["authorization"];
    if (!header) {
        res.status(401).json({ message: "No token provided" });
        return;
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(header, config_1.JWT_PASSWORD);
        if (typeof decoded === "string" || !("id" in decoded)) {
            res.status(403).json({ message: "Invalid token structure" });
            return;
        }
        req.userId = decoded.id;
        next();
    }
    catch (err) {
        res.status(403).json({ message: "You are not logged in" });
        return;
    }
};
exports.userMiddleware = userMiddleware;
