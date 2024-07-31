import {Request, Response } from 'express'
import { responseService } from '../types'
import UserService from '../services/userService'

class UserController {
  constructor(private userService: UserService = new UserService()){}

  public async getUserById(req: Request, res: Response): Promise<void> {
    const id: string = String(req.params.id)
    const response: responseService = await this.userService.getUserById(parseInt(id))
    res.status(200).json(response);
  }

  public async getUserByUserName(req: Request, res: Response): Promise<void> {
    const userName: string = String(req.query.userName)
    const response: responseService = await this.userService.getUserByUserName(userName)
    res.status(200).json(response);
  }

  public async getAllUsers(_req: Request, res: Response): Promise<void> {
    const response: responseService = await this.userService.getAllUsers()
    res.status(200).json(response);
  }
}

export default UserController
