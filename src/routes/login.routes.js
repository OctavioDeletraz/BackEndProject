import express from 'express'
const router = express.Router()
import passport from 'passport'
import  sessionDBConnection  from '../db/session.ecommerce.db.js'
import * as loginController from '../controllers/login.controller.js'

router.use(sessionDBConnection)


router.get('/', loginController.loginUser)
router.post('/', passport.authenticate('local', {failureRedirect: '/failedlogin', successRedirect: '/api/productos'}))
router.get('/failedlogin',(req, res)=>{
    res.json('error')
})
export default router