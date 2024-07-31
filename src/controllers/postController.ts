import { Request, Response } from 'express'
import { RequestWithId, responseService } from '../types'
import PostService from '../services/postService'

class PostController {
  constructor(private postService: PostService = new PostService()){}

  public async createPost(req:RequestWithId, res:Response): Promise<void> {
    const response:responseService = await this.postService.createPost(req.body, req.id)
    res.status(response.code).json(response.content)
  }

  public async getAllPosts(req:RequestWithId, res:Response): Promise<void> {
    const response: responseService = await this.postService.getAllPosts()
    res.status(response.code).json(response.content)
  }

  public async getPostById(req:RequestWithId, res:Response): Promise<void> {
    const id: string = String(req.params.id)
    const response:responseService = await this.postService.getPostById(Number.parseInt(id))
    res.status(response.code).json(response.content)
  }

  public async getAllPostsByUserId(req:RequestWithId, res:Response): Promise<void> {
    const response:responseService = await this.postService.getAllPostsByUserId(req.id)
    res.status(200).json(response.content)
  }
}

export default PostController