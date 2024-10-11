import { Request, Response } from 'express'
import LoginService from '../services/loginService'
import { responseService } from '../types'

class LoginController {
  constructor(private loginService: LoginService = new LoginService()){
    this.loginUser = this.loginUser.bind(this)
  }

  public async loginUser(req: Request, res: Response): Promise<void> {
    const response: responseService = await this.loginService.loginUser(req.body)
    res.status(response.code).json(response.content)
  }
}

export default LoginController