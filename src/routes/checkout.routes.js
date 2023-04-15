import express from 'express'
const router = express.Router()
import * as checkoutController from '../controllers/checkout.controller.js'

router.get('/', checkoutController.createOrder)


export default router