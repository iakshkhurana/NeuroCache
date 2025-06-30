import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_PASSWORD } from "./config";

export const userMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const header = req.headers["authorization"];

    if (!header) {
        res.status(401).json({ message: "No token provided" });
        return;
    }

    try {
        const decoded = jwt.verify(header, JWT_PASSWORD);
        
        if (typeof decoded === "string" || !("id" in decoded)) {
            res.status(403).json({ message: "Invalid token structure" });
            return;
        }

        req.userId = (decoded as JwtPayload).id;
        next();

    } catch (err) {
        res.status(403).json({ message: "You are not logged in" });
        return;
    }
};
