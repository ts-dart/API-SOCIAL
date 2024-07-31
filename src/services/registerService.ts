import bcrypt from 'bcrypt'
import User from '../database/models/user'
import { responseService } from '../types'

export default class RegisterService {
  public async resgisterUser(userBody:any): Promise<responseService> {
    const { userName } = userBody
    if (await User.findOne({ where: { userName } }) !== null) return { code: 409, content: 'Username already registered' }

    await User.create({
      userName: userBody.userName,
      firstName: userBody.firstName,
      lastName: userBody.lastName,
      email: userBody.email,
      password: await bcrypt.hash(userBody.password, 10),
      phoneNumber: userBody.phoneNumber
    })

    return {content: 'User successfully registered', code: 201}
  }
}