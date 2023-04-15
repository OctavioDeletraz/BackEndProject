import logger from '../utils/logger.js'
import Login from '../models/login.models.js'


export const getLogin = async () => {
    try {
        const allLogins= await Login.find()
        return allLogins
    } catch (error) {
        logger.warn(error)
    }
}

export const createLogin = async (login)=> {
    try {
        const loginCreated = await Login.create(login)
        return loginCreated
    } catch (error) {
        logger.warn(error)
    }
}

export const getLoginByUsername = async (username)=>{
    try {
        const selectedLogin = await Login.findOne({username: username})
        return selectedLogin
    } catch (error) {
        logger.warn(error)
    }
}
export const updateLogin = async(search, login)=>{
    try {
        const updatedLogin = await Login.replaceOne(search, login)
        return updatedLogin
    } catch (error) {
        logger.warn(error)
    }
}
