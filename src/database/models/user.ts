import { Model, STRING, INTEGER, DATE, NOW } from 'sequelize'
import Post from './post'
import db from '.'

class User extends Model {
  public id!: number
  public fullName!: string
  public email!: string
  public password!: string
  public phoneNumber!: string
  public createdAt!: string
  public updatedAt!: string
}

User.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  userName: {
    type: STRING,
    allowNull: false,
  },
  fullName: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
  }, 
  password: {
    type: STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: STRING,
    allowNull: false,
  },
  createdAt: {
    type: DATE,
    allowNull: false,
    defaultValue: NOW
  },
  updatedAt: {
    type: DATE,
    allowNull: false,
    defaultValue: NOW
  }
}, {
  sequelize: db,
  modelName: 'User',
  tableName: 'User',
  timestamps: true,
  underscored: false,
})

User.hasMany(Post, { foreignKey: 'userId' })
Post.belongsTo(User, { foreignKey: 'userId' })

export default User