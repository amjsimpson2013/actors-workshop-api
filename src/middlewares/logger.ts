import { Request, Response, NextFunction } from 'express';

export const logger = (req: Request, res: Response, next: NextFunction) => {
    res.on('finish', () => {
        console.log(`request for ${req.url} finished with status ${res.statusCode}`)
    });
    next();
}