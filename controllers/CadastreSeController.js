const db = require("../database/models/index");
const { Client } = require('../database/models');


const CadastreSeController = {
    index: (req, res) => {
        return res.render('cadastrese');
    },
    submit: async (req, res) => {
         
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
    atualizar: async (req, res) => {
         
        let {nome, sobrenome, email, senha, cpf, endereco} = req.body;
        let {id} = req.params
        const client = await db.Client.update({ id: id }, {
            where: {first_name: nome,
                last_name: sobrenome,
                email_login: email,
                password: senha,
                CPF: cpf,
                adress: endereco}
        });
        console.log(client);
       //  res.render("detalhe-produto", {book: product})
    }
};

module.exports = CadastreSeController;