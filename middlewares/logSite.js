const fs = require('fs'); //Porque vamos escrever dentro de um arquivo;

function logSite(req, res, next){      //Criar uma função com 3 parametros - o next é uma outra função;
    fs.appendFileSync('log.txt', "O usuario entrou na url " + req.url) //fs - É só uma função pra abrir um arquivo sempre que o usuário entrar numa rota;
    
    next();
}

module.exports = logSite