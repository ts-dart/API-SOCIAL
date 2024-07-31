import { Request, Response, NextFunction } from 'express'

export default (err: any, _req: Request, res: Response, _next: NextFunction): void => {
    //log de erros
    console.error(err.stack)

    //menssagem e codigo padrão caso nada seja passado
    const statusCode = err.status || 500
    const message = err.message || 'Internal Server Error'

    res.status(statusCode).json({ success: false, message: message })
};