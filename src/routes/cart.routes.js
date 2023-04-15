import express from 'express'
const router = express.Router()
import * as cartController from '../controllers/cart.controller.js'

router.get('/',cartController.getCart)
router.get('/borrar',cartController.deleteCart)
router.get('/crear', cartController.createCart)
router.get('/producto/:_id', cartController.addProductToCart)

export default router