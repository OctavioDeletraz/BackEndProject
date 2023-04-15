import express from 'express'
const router = express.Router()
import passport from 'passport'
import isAuth from '../utils/auth.js'
import logger from '../utils/logger.js'
import sessionDBConnection from '../db/session.ecommerce.db.js'

import routeProducts from './products.routes.js'
import routeRegister from './register.routes.js'
import routeLogin from './login.routes.js'
import routeLogOut from './logout.routes.js'
import routeCart from './cart.routes.js'
import routeCheckout from './checkout.routes.js'
import routeMessages from './messages.routes.js'

router.use(sessionDBConnection)

router.use(passport.initialize())
router.use(passport.session())

router.use('/api/productos',isAuth, routeProducts)
router.use('/api/registro', routeRegister)
router.use('/api/login', routeLogin)
router.use('/api/logout',isAuth, routeLogOut)
router.use('/api/carrito',isAuth, routeCart)
router.use('/api/checkout',isAuth, routeCheckout)
router.use('/api/mensajes',isAuth,routeMessages )

router.get('/', (req, res) => {
    res.redirect('/api/productos')
})

router.get('*', (req, res) => {
    const currentPort = parseInt(process.argv[2]) || 8000
    logger.warn(`Route: ${req.path} 404 Not Found Method: ${req.method} `);
    return res.render("errorPage", {
        currentPort
    })
});

export default router