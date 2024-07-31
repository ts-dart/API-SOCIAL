import { Sequelize } from 'sequelize';
import { Options } from 'sequelize';
import * as config from '../config/config';

const Innatency = new Sequelize(config as Options)

export default Innatency;

