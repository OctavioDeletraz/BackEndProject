import logger from '../utils/logger.js'
import Products from '../models/products.models.js'


export const get = async(_id)=>{
    try {
        if(_id) {
            const products = await Products.findOne({_id: _id})
            return [products]
        }
        else {
            const products = await Products.find({})
            return products;
        }
    }
    catch(error) {
        logger.info(`error getting product: ${error}`)
    }
}
export const create = async (product)=>{
    try {
        const newProduct = await Products.create(product)
        return newProduct
    } catch (error) {
        logger.warn(`error creating product ${error}`)
    }
}
export const update = async (_id, product)=>{
    try {
        const productUpdated = await Products.findByIdAndUpdate(_id, product)
        return productUpdated
    } catch (error) {
        logger.warn(`error updating product ${error}`)
    }
}
export const deleteById = async (_id) =>{
    try {
        const productDeleted = await Products.findByIdAndDelete(_id)
        return productDeleted
    } catch (error) {
        logger.warn(`error deleting product ${error}`)
    }
}
export const getByCategory = async (category)=>{
    try {
        const products = Products.find({category: category})
        return products
    } catch (error) {
        logger.warn(`error getting product ${error}`)
    }
}