import logger from '../utils/logger.js'
import Cart from '../models/cart.models.js'
import { getLoginByUsername } from './login.api.js'
import { get } from './products.api.js'

export const getCart = async (username)=>{
    try {
        const allCarts = await Cart.find({})
        const currentCart = allCarts.find(obj => obj.user.username === username)
        return currentCart
    } catch (error) {
        logger.warn(`error getting cart ${error}`)
    }
}

export const createCart = async (username)=>{
    try {
        const currentLogin = await getLoginByUsername(username)
        const createdCart = await Cart.create({user: currentLogin, cart: []})
        return createdCart
    } catch (error) {
        logger.warn(`error creating cart ${error}`)
    }
}

export const deleteCart = async (username)=>{
    try {
        const currentCart = await getCart(username)
        const updatedCart = await Cart.replaceOne({_id: currentCart._id},{user: currentCart.user , cart: []})
        return updatedCart
    } catch (error) {
        logger.warn(`error deleting cart ${error}`)
    }
}

export const deleteProductFromCart = async(_id, username)=>{
    try {
        const currentCart = await getCart(username)
        const productToDelete = currentCart.cart.findIndex(product => product._id === _id)
        if (productToDelete !== -1){
            currentCart.cart.splice(productToDelete, 1)
            const updatedCart = await Cart.replaceOne({_id: currentCart._id},{user: currentCart.user , cart: currentCart.cart})
            return updatedCart
        }
        return currentCart
    } catch (error) {
        logger.warn(`error deleting product from cart ${error}`)
    }
}
export const addProductToCart = async(_id,username)=>{
    try {
        const products = await get(_id)
        const productSelected = products[0]
        const currentCart = await getCart(username)
        currentCart.cart.push(productSelected)
        const updatedCart = await Cart.replaceOne({_id: currentCart._id},{user: currentCart.user , cart: currentCart.cart})
        return updatedCart
    } catch (error) {
        logger.warn(`error adding product to cart ${error}`)
    }
}