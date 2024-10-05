import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import router from './routes'
import errorMiddleware from './middlewares/errorMiddleware'

class Api {
  private port: number | string = process.env.API_PORT ? process.env.API_PORT : 3000
  private app: Express = express()

  constructor() {
    this.config()
    this.routes()
  }

  private routes(): void {
    this.app.get('/test', (_req: Request, res: Response) => res.status(200).json('API responding'))
    this.app.use('/login', router.loginRoute)
    this.app.use('/post', router.postRoute) //127.0.0.1:1881/post
    this.app.use('/register', router.registerRoute)
    this.app.use('/user', router.userRoute)
    this.app.use(errorMiddleware)
  }

  private config(): void {
    this.app.use(express.json())
    this.app.use(cors())
  }

  public start(): void {
    this.app.listen(this.port, () => console.log('run', this.port))
  }
}

new Api().start()