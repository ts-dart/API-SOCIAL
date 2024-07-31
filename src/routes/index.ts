import LoginRoute from './loginRoute'
import PostRoute from './postRoute'
import RegisterRoute from './registerRoute'
import UserRoute from './userRoute'

export default {
  loginRoute: new LoginRoute().route,
  postRoute: new PostRoute().route,
  registerRoute: new RegisterRoute().route,
  userRoute: new UserRoute().route
}