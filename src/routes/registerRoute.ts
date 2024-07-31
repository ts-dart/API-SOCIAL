import { Router, RequestHandler } from "express";
import RegisterController from "../controllers/registerController";

class RegisterRoute {
  constructor(private controller: RegisterController = new RegisterController(), public route: Router = Router()) {
    route.post('/', controller.registerUser as RequestHandler)
  }
}

export default RegisterRoute