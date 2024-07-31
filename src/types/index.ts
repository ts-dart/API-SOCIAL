import { NextFunction, Request, Response, RequestHandler } from 'express'
import Post from '../database/models/post'
import User from '../database/models/user'

//export interface RequestHandlerWithRequestWithId = (req: RequestWithId, res: Response, next: NextFunction) => void
 
export interface RequestWithId extends Request { id: number | string | undefined  }

export interface user { 
  id: number,
  userName: string,
  firstName: string
  lastName: string,
  email: string,
  password: string,
  phoneNumber: string,
  createdAt: string,
  updatedAt: string,
}

export interface responseService { 
  code: number, 
  content: string | { post: Post | null, comments: Post | null } | Post[] | User | User[] | null
}