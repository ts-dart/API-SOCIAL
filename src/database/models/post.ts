import { Model, STRING, INTEGER, DATE, NOW } from 'sequelize'
import db from '.'

class Post extends Model{
  public id!: number
  public title!: string
  public content!: string
  public userId!: number
  public parentPostId!: number
}

Post.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  }, 
  title: {
    type: STRING,
    allowNull: true,
  }, 
  content: {
    type: STRING,
    allowNull: false,
  }, 
  userId: {
    type: INTEGER,
    allowNull: false,
  }, 
  parentPostId: {
    type: INTEGER,
    allowNull: true,
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
  modelName: 'Post',
  tableName: 'Post',
  timestamps: true,
  underscored: false,
})

export default Post