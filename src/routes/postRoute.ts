import { Router } from 'express'
import { RequestHandler } from 'express'

import PostController from '../controllers/postController'
import JwtValidator from '../middlewares/jwtValidator'
import { PostServiceInterface } from '../types';

import PostService from '../services/postService'
import Post from '../database/models/post'

class PostRoute {
  //criar um objeto e substituir os valores colocando os metodos de post e jogara para service ao invez de jogar o post direto
  private service: PostService<Post>
  private controller: PostController<PostServiceInterface>

  constructor(public route: Router = Router()) {
    this.service = new PostService<Post>(new Post())
    this.controller = new PostController<PostServiceInterface>(this.service)

    route.post('/', JwtValidator as RequestHandler, this.controller.createPost as any)
    route.get('/', this.controller.getAllPosts as any)
    route.get('/:id', this.controller.getPostById as any)
    route.get('/allPostsByUser', this.controller.getAllPostsByUserId as any)
  }
}

export default PostRoute 