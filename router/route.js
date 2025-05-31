const {express} = require('../server/mainServer.js');
const {handleRegisterrequest, handleLoginrequest, handleLogoutrequest,handledashboardrequest,handlechekAuth} = require('../handler/routehandler.js')
const routes = express.Router();

// define the routes for login and register
routes.post('/register',  handleRegisterrequest,)

routes.post('/login',handleLoginrequest)
 
routes.get('/logout',handleLogoutrequest);

const authMiddleware = (req, res, next) => {
    if (!req.session.uid) {
        return res.status(401).json({ message: "Unauthorized! Please login first.", isAuthenticated: false });
    }
    next();
};

routes.get('/dashboard',authMiddleware,handledashboardrequest)
.get('/chek-auth',handlechekAuth)



module.exports = {routes};

