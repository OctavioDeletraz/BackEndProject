import logger from '../utils/logger.js'

export const logOut = (req,res)=>{
    try {
        req.session.destroy()
        req.logout()
        res.redirect('/')
    } catch (error) {
        logger.warn(error)
    }
}