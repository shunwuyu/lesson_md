import { Request, Response, NextFunction } from "express";
export declare const validateUserData: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const hashPassword: (req: Request, res: Response, next: NextFunction) => Promise<void>;
