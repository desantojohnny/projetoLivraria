const fs = require('fs'); 

function logDB(req, res, next){    
    fs.appendFileSync('logDB.txt', "Registro criado => url " + req.url) 
    
    next();
}

module.exports = logDB