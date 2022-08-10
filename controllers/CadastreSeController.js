const db = require("../database/models/index");
const { Client } = require('../database/models');


const CadastreSeController = {
    index: (req, res) => {
        return res.render('cadastrese');
    },
    cadastro: async (req, res) => {
         
         let {nome, sobrenome, email, senha, cpf, endereco} = req.body;
         const client = await db.Client.create({
            first_name: nome,
            last_name: sobrenome,
            email_login: email,
            password: senha,
            CPF: cpf,
            adress: endereco
         })

         console.log(client);
        //  res.render("detalhe-produto", {book: product})
    
},
};

module.exports = CadastreSeController;