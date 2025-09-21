import { Request, Response, NextFunction } from 'express';

export const logger = (req: Request, res: Response, next: NextFunction) => {
    // req.on('resume', () => {
    //     console.log(`request made to ${req.host}${req.url} using method ${req.method}`) 
    // });
    
    res.on('finish', () => {
        console.log(`request for ${req.url} finished with status ${res.statusCode}`)
    });
    next();
}