import express from 'express'
const router = express.Router()
import * as logOutController from '../controllers/logout.controller.js'


router.get('/', logOutController.logOut)


export default router