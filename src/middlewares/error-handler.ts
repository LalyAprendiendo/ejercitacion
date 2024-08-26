import { NextFunction, Request, Response } from "express";

function errorHandler(error, req: Request, res: Response, next: NextFunction) {
    res.status(error.status || 500).json({ message: error.message })
}

export default errorHandler