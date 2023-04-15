import dotenv from 'dotenv';
dotenv.config();
import logger from '../utils/logger.js'
import mongoose from 'mongoose';

mongoose.set("strictQuery", false)

export const dbconnection = await mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.URL}/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000
})
.then(()=> logger.info('Conectado a Mongodb'))
.catch(err => logger.warn(err))

