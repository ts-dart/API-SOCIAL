import { Response, Request } from 'express'
import RegisterService from '../services/registerService'
import { responseService } from '../types';

class RegisterController {
  constructor(private registerService: RegisterService = new RegisterService()) {}

  public async registerUser(req: Request, res: Response): Promise<void> {
    const response: responseService = await this.registerService.resgisterUser(req.body)
    res.status(response.code).json(response.content);
  }
 }

export default RegisterController 