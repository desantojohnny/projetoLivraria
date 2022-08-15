const db = require("../database/models/index");
const { Client } = require('../database/models');
const { validationResult } = require('express-validator');     //importanto = express-validation / desestruturando = validationResult ...
const bcrypt = require('bcrypt');


const LoginController = {
    index: (req, res) => {
        if(req.session.client){
            let client = req.session.client
            return res.render('logado', {client})
        };
        return res.render('cadastrese');
    },
    submit: async (req, res) => {
        const errors = validationResult(req);
         
        if (!errors.isEmpty()) {
            //console.log(errors.mapped);
            return res.render('cadastrese', { errors: errors.mapped() });
        
        }                                   //fim validação ...
         
         let {nome, sobrenome, email, senha, cpf, telefone, endereco} = req.body;

         let senhaCrypt = bcrypt.hashSync(senha, 10);

         const client = await db.Client.create({
            first_name: nome,
            last_name: sobrenome,
            email_login: email,
            password: senhaCrypt,
            CPF: cpf,
            phone: telefone,
            adress: endereco
         })

        //  console.log(client);
            return res.redirect('/');
    },
    store: async (req, res) => {

        let { email, senha } = req.body;
        
        let client = await Client.findOne({
        where:{
            email_login: email}
        });
        
        if(!bcrypt.compareSync(senha, client.password)){
            return res.send('Senha inválida!')
        } 
        if (bcrypt.compareSync(senha, client.password)){ 
            req.session.client = client;
                req.session.save(function() {
                    return res.render("logado", {client});
              });

            //if(logado != undefined){
                //res.cookie('logado', user.email, {maxAge: oneDay})
            //}

            // return res.redirect('/');
        } 
        else { 
            req.session.client = undefined;
            return res.redirect('/login');
        }
    },
    logout: async (req, res) => {
        req.session.destroy();
        res.redirect('/login');
    }
};
module.exports = LoginController;