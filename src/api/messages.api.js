import logger from '../utils/logger.js'
import Messages from '../models/messages.models.js'
import * as loginApi from './login.api.js'

export const get = async()=>{
    try {
        const messages = await Messages.find({})
        return messages;
    }
    catch(error) {
        logger.info(`error getting messages: ${error}`)
    }
}
export const create = async (username,message)=>{
    try {
        const currentLogin = await loginApi.getLoginByUsername(username)
        const fullMessage = {
            user: currentLogin,
            message: message
        }
        const newMessage = await Messages.create(fullMessage)
        return newMessage
    } catch (error) {
        logger.warn(`error creating new Message ${error}`)
    }
}
