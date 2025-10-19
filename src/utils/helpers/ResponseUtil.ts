import { response, Response } from 'express';

export function ok<Type>(res: Response, dto?: Type): Response {
    const okCode: number = Results.OK.code;
    if (dto) {
        res.type('application/json');
        res.status(okCode).json(dto);
    } else {
        res.sendStatus(okCode);
    }
    return res;
}

export function noContent(res: Response, message?: string) {
    const statusMessage = message ? message : Results.NO_CONTENT.defaultMessage;
    return setJsonResponse(res, Results.NO_CONTENT.code, statusMessage);
}

export function unauthorized(res: Response, message?: string) {
    const errorMessage = message ? message : Results.UNAUTHORIZED.defaultMessage;
    return setJsonResponse(res, Results.UNAUTHORIZED.code, errorMessage);
}

export function forbidden(res: Response, message?: string) {
    const errorMessage = message ? message : Results.FORBIDDEN.defaultMessage;
    return setJsonResponse(res, Results.FORBIDDEN.code, errorMessage);
}

export function notFound(res: Response, message?: string) {
    const errorMessage = message ? message : Results.NOT_FOUND.defaultMessage;
    return setJsonResponse(res, Results.NOT_FOUND.code, errorMessage);
}

export function uncaught(res: Response, message?: string) {
    const errorMessage = message ? message : Results.INTERNAL_SERVER_ERROR.defaultMessage;
    return setJsonResponse(res, Results.INTERNAL_SERVER_ERROR.code, errorMessage);
}

function setJsonResponse(res: Response, code: number, message: string): Response {
    res.status(code).json({ message });
    return response;
}

class Results {
    public readonly code: number;
    public readonly defaultMessage: string;
    
    constructor(code: number, defaultMessage: string) {
        this.code = code;
        this.defaultMessage = defaultMessage;
    }

    public static readonly OK = new Results(200, 'Ok');
    public static readonly NO_CONTENT = new Results(204, 'No Content');
    public static readonly UNAUTHORIZED = new Results(401, 'Unauthorized');
    public static readonly FORBIDDEN = new Results(403, 'Forbidden');
    public static readonly NOT_FOUND = new Results(404, 'Not Found');
    public static readonly INTERNAL_SERVER_ERROR = new Results(500, 'Internal Server Error');
}