import logger from '../utils/logger.js'
import * as messagesApi from '../api/messages.api.js'


export const getAllMessages = async (req, res) => {
    try {
        const currentSession = req.session.passport.user
        const currentPort = parseInt(process.argv[2]) || 8000
        const messages = await messagesApi.get()
        return res.render('messagesPage', {messages, currentPort, currentSession})
    } catch (error) {
        logger.warn(`error getting messages ${error}`)
    }
}
