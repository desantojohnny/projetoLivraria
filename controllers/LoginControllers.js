const db = require("../database/models/index");
const { Client } = require('../database/models');
//const { validationResult } = require('express-validator');     //importanto = express-validation / desestruturando = validationResult ...

const LoginController = {
    index: (req, res) => {
        return res.render('cadastrese');
    },
    submit: async (req, res) => {
        //const errors = validationResult(req);              //Todas as validações ficam disponível no "req" ...
         
        // if (!errors.isEmpty()) {            //início validação ...
            //console.log(errors.mapped);//      // função mapped "aparece o erro de forma mais elaborado"...
            //return res.render('login', { errors: errors.mapped() });  //retornando "errors" para a view 'cadastrese' ...
        
        //}                                   //fim validação ...
         
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
    store: async (req, res) => {

        let { email, senha } = req.body;
        
        let user = await Client.findOne({
        where:{
            email_login: email}
        });
        if(user.password == senha) {
            req.session.user = user;
            return res.redirect('/');
        }
        req.session.usuario = undefined;
        return res.redirect('/login');
    },
    logout: async (req, res) => {
        req.session.destroy();
        res.redirect('/login');
    }
};
module.exports = LoginController;