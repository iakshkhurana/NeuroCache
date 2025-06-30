// types.d.ts or in your middleware file (above all imports)
import "express";
import { ObjectId } from "mongoose";

declare global {
  namespace Express {
    interface Request {
      userId?: string | ObjectId;
    }
  }
}

export {};
