import { PostServiceInterface, responseService, PostAttributes } from '../types'
import Post from '../database/models/post'

//TIPO GENERICO NAO FUNCIONAL NESSA CLASSE. PASSAR A CLASSE Post DE postRouter PARA postService NAO FUNCIONA OS METODOS DA CLASSE NAO SAO RECONHECIDOS
export default class PostService<T> implements PostServiceInterface {
  private post: Post

  constructor(post: Post) {
    this.post = post
  }

  public createPost = async (postBody: Post, id: number | string | undefined ): Promise<responseService> => {
    await Post.create({
      content: postBody.content,
      userId: id,
      parentPostId: postBody.parentPostId,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    return {code: 201, content: 'Postagem enviada com sucesso'}
  }

  public getPostById = async (idQuery: number): Promise<responseService> => {
    const post: Post | null = await Post.findByPk(idQuery)
    const comments: Post | null = await Post.findOne({ where: { parentPostId: post?.id } })

    return { code: 200, content: { post, comments } }
  }

  public getAllPosts = async (): Promise<responseService> => {
    const posts: Post[] = await Post.findAll()
    return { code: 200, content: posts }
  }

  public getAllPostsByUserId = async (id: number | string | undefined ): Promise<responseService> => {
    const posts: Post[] = await Post.findAll({where: {userId: id}})
    return { code: 200, content: posts }
  }

}
