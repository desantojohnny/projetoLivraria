const db = require("../database/models/index");
const { Book } = require('../database/models');
const { Order } = require('../database/models');
// const { where } = require("sequelize/types");

const ProdutoController = {
    index: (req,res) => {
        return res.render('produto');
    },
    productDetail: async (req, res) => {
         
            let product;
            let id = req.params.id;
             await db.Book.findByPk(id).then((data)=>{
                 product = data.dataValues;
             });
             res.render("detalhe-produto", {book: product})
        
    },
    searchAllProducts: async (req, res) => {
                
                let books = await db.Book.findAll();

                
                return res.render("produtos", {books});
    },
    searchHighlightsProducts: async (req, res) => {
                
        let books = await db.Book.findAll( {where:{
            destaque: true}
        });
        let bests = await db.Book.findAll( {where:{
            best: true}
        });
        let releasings = await db.Book.findAll( {where:{
            releasing: true}
        });
        
        return res.render("home", {books, bests, releasings});
    },
    addToCart: async (req, res) => {

        if(req.session.client){
            let client = req.session.client
            // console.log(client);

            let product;
                let id = req.params.id;
                await db.Book.findByPk(id).then((data)=>{
                    product = data.dataValues;
                    return console.log(product);
                });
             
        
            const orders = await db.Order.create({
                request_date: new Date(),
                client_id: client.id,
                id_product: product.id,
                url_img: product.url_image,
                titulo: product.title,
                nome_autor: product.authors,
                preco: product.price
            })
            return res.redirect('/produto/'+ product.id)
        }else { 
            req.session.client = undefined;
            return res.redirect('/login');
        }

    },
    shop: async (req, res) => {

        if(req.session.client){
            let client = req.session.client
            // console.log(client);

            let product;
                let id = req.params.id;
                await db.Book.findByPk(id).then((data)=>{
                    product = data.dataValues;
                    return console.log(product);
                });
             
        
            const orders = await db.Order.create({
                request_date: new Date(),
                client_id: client.id,
                id_product: product.id,
                url_img: product.url_image,
                titulo: product.title,
                nome_autor: product.authors,
                preco: product.price
            })
            return res.redirect('/carrinhoPasso1')
        }else { 
            req.session.client = undefined;
            return res.redirect('/login');
        }

    },
    addToCart: async (req, res) => {

        if(req.session.client){
            let client = req.session.client
            // console.log(client);

            let product;
                let id = req.params.id;
                await db.Book.findByPk(id).then((data)=>{
                    product = data.dataValues;
                    return console.log(product);
                });
             
        
            const orders = await db.Order.create({
                request_date: new Date(),
                client_id: client.id,
                id_product: product.id,
                url_img: product.url_image,
                titulo: product.title,
                nome_autor: product.authors,
                preco: product.price
            })
            return res.redirect('/produto/'+ product.id)
        }else { 
            req.session.client = undefined;
            return res.redirect('/login');
        }

    },
    destroy: async (req, res) => {

            const {id} = req.params;
            console.log(id)    
             
        
            const resultado = await db.Order.destroy({
                where:{
                    id: id}
            })
             console.log(resultado)
            return res.redirect('/')
        // }
    }
};

module.exports = ProdutoController;


/* index: //mostra lista de produtos
show: //mostra detalhe de um produto
create: //enviar dados para adicionar um produto  */

// const ProdutoControlle = {
    // searchAllProducts:(req, res) => {
    //     async function getBook() {
    //         let products;
    //          await Book.findAll().then((data)=>{
    //              products = data.dataValues;
    //          });
    //          res.render("conteudo-home", {book: products})
    //     }
    // },
//     productDetail: (req, res) => {
//         async function getBook() {
//             let product;
//              await Book.findByPk(id).then((data)=>{
//                  product = data.dataValues;
//              });
//              res.render("descricao-prod", {book: product})
//         }
//     },
//     searchProductsByCategory:(req, res) => {
//         async function getBook() {
//             let books;
//              await Book.findAll().then((data)=>{
//                 books = data.dataValues;
//              });
//              res.render("conteudo-home", {book: books})
//         }
//     }
// };

// module.exports = ProdutoController;

// index: (req, res) => {
//     async function getBook() {
//         let product;
//          await Book.findAll().then((data)=>{
//              product = data.dataValues;
//          });
//          res.render("descricao-prod", {book: product})
//        }
// }
