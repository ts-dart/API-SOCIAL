
import 'dotenv/config'
import { Options } from 'sequelize'

const config: Options = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'blog',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: 'postgres',
  dialectOptions: { timezone: 'Z' },
  logging: false,
}

module.exports = config;