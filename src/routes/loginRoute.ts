import { Router } from 'express'

import LoginController from '../controllers/loginController'

class LoginRoute {
  constructor(private controller: LoginController = new LoginController(),  public route: Router = Router()) {
    route.post('/', controller.loginUser)
  }
}

export default LoginRoute