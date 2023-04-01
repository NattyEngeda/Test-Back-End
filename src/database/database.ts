import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();
const env = process.env;

const database = new Sequelize(
    env.DB_NAME!,
    env.DB_USER!,
    env.DB_PASSWORD!,
    {
        dialect: 'mysql',
        host: env.HOST!,
    }
);

export default database;