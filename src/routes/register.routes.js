import express from 'express'
const router = express.Router()
import passport from 'passport'

import * as registerController from '../controllers/register.controller.js'



router.use(passport.initialize())
router.use(passport.session())

router.get('/', registerController.registerUser)
router.post('/', passport.authenticate('register',{failureRedirect: '/failedregister', successRedirect:'/api/carrito/crear'}))


router.get('/failedregister',(req, res)=>{
    res.json('error')
})
export default router