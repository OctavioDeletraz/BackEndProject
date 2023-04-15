import express from 'express'
const router = express.Router()


import * as messagesController from '../controllers/messages.controller.js'


router.get('/',messagesController.getAllMessages )

export default router