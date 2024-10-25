import bcrypt from 'bcrypt'
import User from '../database/models/user'
import { responseService } from '../types'

export default class RegisterService {
  public async resgisterUser(userBody:any): Promise<responseService> {
    const { userName, email, phoneNumber } = userBody
    if (await User.findOne({ where: { userName } }) !== null) return { code: 409, content: 'Nome de usuário já cadastrado' }
    if (await User.findOne({ where: { email } }) !== null) return { code: 409, content: 'E-mail já cadastrado' }
    if (await User.findOne({ where: { phoneNumber } }) !== null) return { code: 409, content: 'Número já cadastrado' }

    await User.create({
      userName: userBody.userName,
      fullName: userBody.fullName,
      email: userBody.email,
      password: await bcrypt.hash(userBody.password, 10),
      phoneNumber: userBody.phoneNumber
    })

    return {content: 'Usuário cadastrado com sucesso', code: 201}
  }
}