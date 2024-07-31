import { Request, Response, NextFunction } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { RequestWithId } from '../types'

class JwtValidator {
  public static validator(req:RequestWithId, res:Response, next:NextFunction): void {
    // verificar o id que vem do token
    const token = req.headers.authorization

    if (!token) res.status(401).json('Token not found')
    
    try {
      const decoded:JwtPayload = jwt.verify(token as string, process.env.JWT_SECRET as string) as JwtPayload & JwtPayload
      req.id = decoded.id
    } catch (err) {
      res.status(401).json('Expired or invalid token')
    }

    next()
  }
}

export default JwtValidator.validator