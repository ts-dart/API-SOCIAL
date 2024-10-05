import { Request, Response } from 'express'
import { PostServiceInterface, RequestWithId, responseService } from '../types'

class PostController<T extends PostServiceInterface> {
  private postService: T

  constructor(postService: T){
    this.postService = postService
  }

  public createPost = async (req:RequestWithId, res:Response): Promise<void> => {
    const response:responseService = await this.postService.createPost(req.body, req.id)
    res.status(response.code).json(response.content)
  }

  public getAllPosts = async (_req:RequestWithId, res:Response): Promise<void> => {
    const response: responseService = await this.postService.getAllPosts()
    res.status(response.code).json(response.content)
  }

  public getPostById = async (req:RequestWithId, res:Response): Promise<void> => {
    const id: string = String(req.params.id)
    const response:responseService = await this.postService.getPostById(Number.parseInt(id))
    res.status(response.code).json(response.content)
  }

  public getAllPostsByUserId = async (req:RequestWithId, res:Response): Promise<void> => {
    const response:responseService = await this.postService.getAllPostsByUserId(req.id)
    res.status(200).json(response.content)
  }
}

export default PostController