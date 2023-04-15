import logger from '../utils/logger.js'
import * as loginApi from '../api/login.api.js'
import bcryptjs from 'bcryptjs'
import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'



export const registerUser = async (req,res) => {
    try {
        passport.use('register', new LocalStrategy({passReqToCallback: true}, async (req, username, password, done )=>{
            const userObtained = await loginApi.getLoginByUsername(username)
            if (userObtained){
                return done('usuario registrado')
            }
            let encryptedPassword = await bcryptjs.hash(password, 8)
            const newUser = {
                username: username,
                password: encryptedPassword,
                email: req.body.email,
                names: req.body.names,
                dir: req.body.dir,
                phone: req.body.phone,
                avatar: req.body.avatar
            }
            await loginApi.createLogin(newUser)
            return done(null, newUser)
        }))
        return res.render('registerPage.ejs')
    } catch (error) {
        logger.warn(error)
    }
}
passport.serializeUser( async function (user, done){
    done(null, user.username)
})
passport.deserializeUser(async function (username,done){
    const userSelected = await loginApi.getLoginByUsername(username)
    done(null, userSelected)
})

