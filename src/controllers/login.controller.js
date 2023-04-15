import logger from '../utils/logger.js'
import * as loginApi from '../api/login.api.js'
import bcryptjs from 'bcryptjs'
import passport from 'passport'



import { Strategy as LocalStrategy } from 'passport-local'


export const loginUser =  async (req,res) =>{
    try {
        passport.use('local', new LocalStrategy(async (username, password, done) => {
            const userSelected = await loginApi.getLoginByUsername(username)
            if (!userSelected) {
                return done(null, false)
            }
            bcryptjs.compare(userSelected.password, password, function(err, result) {
                if (result) {
                    return done(null, false)
                }
                return done(null, userSelected)
            })
        }))
    } catch (error) {
        logger.warn(error)
    }
    const currentPort = 8000
    if (req.isAuthenticated()){
        res.redirect('/api/productos')
    }else{
        res.render('loginPage.ejs', {currentPort})
    }
}
passport.serializeUser(function (user, done){
    done(null, user.username)
})
passport.deserializeUser(async function (username,done){
    const userSelected = await loginApi.getLoginByUsername(username)
    done(null, userSelected)
})