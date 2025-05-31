require('dotenv').config();
// const {app} = require('../Server/MainServer.js');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const sessionmiddleware = (session({ 
    secret : process.env.SECRECT_SESSION_KEY,
    resave:false,
    saveUninitialized:false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_SESSION,
        collectionName: 'sessions',
        ttl: 60*60*24*7, // after 7 days the session will expire 
    }),
        cookie: { 
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true, // 🔹 Secure Cookie
        sameSite: "Strict",
        secure:false, // set to true if using https
    }
}))

module.exports = {
    sessionmiddleware
}
