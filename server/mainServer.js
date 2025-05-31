const express = require('express');
const app = express();

function server (url){
    app.listen(url,() =>{
        console.log(`Server started at http://localhost:${url}`);
    })
}
module.exports = {
    server,
    app,
    express
}