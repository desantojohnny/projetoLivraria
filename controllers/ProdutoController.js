const db = require("../database/models/index");
const { Book } = require('../database/models');

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
             res.render("produto", {book: product})
        
    },
    searchAllProducts: async (req, res) => {
                
                let books = await db.Book.findAll();

                console.log(books);
                return res.render("index", {books});
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
