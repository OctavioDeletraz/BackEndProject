import session from 'express-session'
import MongoStore from 'connect-mongo'

const advancedOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true
        
}

const sessionDBConnection = session({
    store: MongoStore.create({
        mongoUrl: `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.URL}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
        mongoOptions: advancedOptions
    }),
    secret: `${process.env.DB_SECRET}`,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 900000
    }
})

export default sessionDBConnection