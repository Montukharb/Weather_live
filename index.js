require('dotenv').config()
const {server,app,express} = require ('./server/mainServer.js');
const {routes} = require('./router/route.js');
const cors = require('cors');
const {mongooseConnect} = require('./database/Connection.js');
const {sessionmiddleware} = require('../backend/sessions/session.js')
// define the middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(sessionmiddleware);
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type','Authorization'],
    credentials: true,
}))
    
//define the routes
app.use('/auth',routes);
//server connected
server(process.env.PORT);
mongooseConnect(process.env.MONGO_URL);