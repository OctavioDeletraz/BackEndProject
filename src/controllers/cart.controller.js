import logger from '../utils/logger.js'
import * as cartApi from '../api/cart.api.js'

export const addProductToCart = async (req, res) => {
    try {
        const idRecieved = req.params._id
        const usernameRecieved = req.session.passport.user
        await cartApi.addProductToCart(idRecieved, usernameRecieved)
        return res.redirect('/')
    } catch (error) {
        logger.warn(error)
    }
}
export const deleteCart = async (req, res) => {
    try {
        const usernameRecieved = req.session.passport.user
        await cartApi.deleteCart(usernameRecieved)
        return res.redirect('/api/productos')
    } catch (error) {
        logger.warn(error)
    }
}
export const createCart = async (req, res) => {
    try {
        const usernameRecieved = req.session.passport.user
        await cartApi.createCart(usernameRecieved)
        res.redirect('/api/productos')
    } catch (error) {
        logger.warn(error)
    }
}
export const getCart = async (req,res) =>{
    const usernameRecieved = req.session.passport.user
    const currentSession = usernameRecieved
    const currentPort = parseInt(process.argv[2]) || 8000
    const cart = await cartApi.getCart(usernameRecieved)
    const cartProducts = cart.cart
    return res.render('cartPage',{currentSession, currentPort, cartProducts })
}