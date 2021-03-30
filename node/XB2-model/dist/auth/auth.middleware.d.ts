import { Request, Response, NextFunction } from 'express';
export declare const currentUser: (request: Request, response: Response, next: NextFunction) => void;
export declare const authGuard: (request: Request, response: Response, next: NextFunction) => void;
export declare const validateLoginDate: (request: Request, response: Response, next: NextFunction) => Promise<void>;
