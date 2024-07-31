import User from '../database/models/user'
import { responseService } from '../types'

export default class UserService {
  public async getUserById(id: number): Promise<responseService> {
    const response: User | null = await User.findByPk(id)
    return { code: 200, content: response}
  }

  public async getUserByUserName(userName: string) {
    const response: User | null = await User.findOne({ where: { userName } })
    return { code: 200, content: response}
  }

  public async getAllUsers() {
    const response: User[] | null = await User.findAll()
    return { code: 200, content: response}
  }
}
;