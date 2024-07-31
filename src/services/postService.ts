import Post from '../database/models/post'
import { responseService } from '../types'

export default class PostService {
  public async createPost(postBody: any, id: number | string | undefined ): Promise<responseService> {
    await Post.create({
      content: postBody.content,
      userId: id,
      parentPostId: postBody.parentPostId,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    return {code: 201, content: 'Post sent successfully'}
  }

  public async getPostById(idQuery: number): Promise<responseService> {
    const post: Post | null = await Post.findByPk(idQuery)
    const comments: Post | null = await Post.findOne({ where: { parentPostId: post?.id } })

    return { code: 200, content: { post, comments } }
  }

  public async getAllPosts(): Promise<responseService> {
    const posts: Post[] = await Post.findAll()
    return { code: 200, content: posts }
  }

  public async getAllPostsByUserId(id: number | string | undefined ): Promise<responseService> {
    const posts: Post[] = await Post.findAll({where: {userId: id}})
    return { code: 200, content: posts }
  }
}
