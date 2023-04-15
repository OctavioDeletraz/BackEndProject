import logger from '../utils/logger.js'
import * as orderApi from '../api/order.api.js'
import { getCart } from '../api/cart.api.js'
import * as nodemailer from '../utils/nodemailer.js'

export const createOrder = async (req, res)=>{
    try {
        const currentUsername = req.session.passport.user
        const currentCart = await getCart(currentUsername)
        await nodemailer.mailerCheckout(currentCart)
        await orderApi.createOrder(currentUsername,currentCart)
        return res.redirect('/api/carrito/borrar')
    } catch (error) {
        logger.warn(error)
    }
}