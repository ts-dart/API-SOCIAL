import { Router, RequestHandler } from 'express'
import UserController from '../controllers/userController'

class UserRoute {
  constructor(private controller: UserController = new UserController(), public route: Router = Router()) {
    route.get('/', controller.getAllUsers as RequestHandler)
    route.get('/:id', controller.getUserById as RequestHandler)
    route.get('/getUserByUserName', controller.getUserById as RequestHandler)
  }
}

export default UserRoute