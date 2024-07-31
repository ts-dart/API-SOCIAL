import User from '../database/models/user'
import jwt, { SignCallback } from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { responseService } from '../types'

export default class LoginService {
  private async loginHandle(inputType: string, inputValue: string, password: string): Promise<responseService> {
    const userAccount = await User.findOne({ where: { [inputType]: inputValue } })

    if (userAccount === null) return { content: 'User not found', code: 404 }

    const { password:pass } = userAccount?.dataValues
    const descriptPassword = await bcrypt.compare(password, pass)
    if (!descriptPassword) return { content: 'Incorrect password', code: 401 }

    return this.createToken(userAccount)
  }

  private async createToken(userAccount: any): Promise<responseService> {
    const secret: string | undefined = process.env.JWT_SECRET;
    const token: string = await jwt.sign(userAccount?.dataValues, String(secret), { expiresIn: '24h', algorithm: 'HS256' });

    return { content: token, code: 200 };
  }

  public async loginUser(userBody: any): Promise<responseService> {
    const { loginType } = userBody
    
    switch(loginType) {
      case 'email':
        return await this.loginHandle(loginType, userBody.email, userBody.password)
      case 'userName':
        return await this.loginHandle(loginType, userBody.userName, userBody.password)
      case 'phoneNumber':
        return await this.loginHandle(loginType, userBody.phoneNumber, userBody.password)
      default:
        return {content: 'Unauthorized login', code: 401}
    }
  }
}
