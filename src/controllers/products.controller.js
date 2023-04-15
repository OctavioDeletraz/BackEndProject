import * as productsApi from '../api/products.api.js';
import logger from '../utils/logger.js'

export const getProducts = async (req, res) => {
    try {
        const currentSession = req.session.passport.user
        const currentPort = parseInt(process.argv[2]) || 8000
        if (req.params._id) {
            const productByID = await productsApi.get(req.params._id)
            const product = productByID[0]
            return res.render('infoPage', {
                currentPort,
                currentSession,
                product
            })
        }
        const products = await productsApi.get()
        return res.render('index', {
            currentPort,
            currentSession,
            products
        })
    } catch (error) {
        logger.warn(`error getting product ${error}`)
    }
}
export const createProduct = async (req, res) => {
    try {
        const productToCreate = req.body
        await productsApi.create(productToCreate)
        return res.redirect('/api/productos')
    } catch (error) {
        logger.warn(`error creating product ${error}`)
    }
}

export const getUpdateProduct = async (req, res) => {
    try {
        const currentSession = req.session.passport.user
        const currentPort = parseInt(process.argv[2]) || 8000
        const productByID = await productsApi.get(req.params._id)
        const product = productByID[0]
        return res.render('infoPageUpdate', {
            currentPort,
            currentSession,
            product
        })
    } catch (error) {
        logger.warn(`error getting product ${error}`)
    }
}
export const updateProduct = async (req, res) => {
    try {
        const _id = req.params._id
        const productToUpdate = req.body
        await productsApi.update(_id, productToUpdate)
        return res.redirect('/api/productos')
    } catch (error) {
        logger.warn(`error updating product ${error}`)
    }
}
export const deleteProductById = async (req, res) => {
    try {
        
        const _id = req.params._id
        await productsApi.deleteById(_id)
        return res.redirect('/api/productos')
    } catch (error) {
        logger.warn(`error deleting product ${error}`)
    }
}
export const getProductsByCategory = async (req, res) => {
    try {
        const currentSession = req.session.passport.user
        const currentPort = parseInt(process.argv[2]) || 8000
        const category = req.params.category
        const products = await productsApi.getByCategory(category)
        return res.render('index', {
            currentPort,
            currentSession,
            products
        })
    } catch (error) {
        logger.warn(`error getting products ${error}`)
    }
}