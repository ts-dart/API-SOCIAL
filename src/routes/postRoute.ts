import { NextFunction, Response, Router } from 'express'
import { RequestHandler } from 'express'

import PostController from '../controllers/postController'
import JwtValidator from '../middlewares/jwtValidator'
import { RequestWithId } from '../types';


class PostRoute {
  constructor(private controller: PostController = new PostController(), public route: Router = Router()) {
    route.post('/', JwtValidator as RequestHandler, controller.createPost as any)
    route.get('/', JwtValidator as RequestHandler, controller.getAllPosts as any)
    route.get('/:id', JwtValidator as RequestHandler, controller.getPostById as any)
    route.get('/allPostsByUser', JwtValidator as RequestHandler, controller.getAllPostsByUserId as any)
  }
}

export default PostRoute