const db = require("../database/models/index");
const { Client } = require('../database/models');

const LoginController = {
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
         return res.render("logado", {client})
    },
    // store: async (req, res) => {

    //     let { email, senha } = req.body;
        
    //     let user = await db.Client.findOne( {where:{
    //         email_login: email}
    //     });
    //     if(password === user.senha) {
    //         req.session.senha = senha;

    //         return res.redirect('/');
    //     }

    //     req.session.usuario = undefined;
    //     return res.redirect('/login');
    // },
    logout: async (req, res) => {
        req.session.destroy();
        res.redirect('/login');
    }
};
module.exports = LoginController;