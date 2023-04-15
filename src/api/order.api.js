import logger from '../utils/logger.js'
import Order from '../models/order.models.js'

export const createOrder = async (username,cart)=>{
    try {
        const order = await Order.findOne({'user.username': username})
        if (!order){
            const newOrder = await Order.create({user: cart.user, order: [cart.cart], state: true, timestamp: `Creada: ${Date().toLocaleString()}`})
            return newOrder
        }
        order.order.push(cart.cart)
        const updatedOrder = Order.updateOne({'user.username': username},{order: order.order, timestamp: `Modificada: ${Date().toLocaleString()}`})
        return updatedOrder
    } catch (error) {
        logger.warn(`error getting order ${error}`)
    }
}