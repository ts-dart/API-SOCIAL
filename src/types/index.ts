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

export interface PostServiceInterface  {
  createPost(body: any, id: number | string | undefined): Promise<responseService>;
  getAllPosts(): Promise<responseService>;
  getPostById(id: number): Promise<responseService>;
  getAllPostsByUserId(id: number | string | undefined): Promise<responseService>;
}

export interface PostAttributes {
  id: number,
  title: string
  content: string;
  userId: number | string | undefined;
  parentPostId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface postMethodsInterface extends Post { 
  findAll: Promise<Post[] | null> | undefined,
  create: Promise<any>,
  findByPk: Promise<Post | null>,
  findOne: Promise<Post | null>
}