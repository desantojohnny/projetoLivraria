const db = require ('../database/models')
const ProdutoController = {
    index: async function (req,res)  {
        const books = await db.Book.findAll();
   res.send(books)
        // return res.render('produto');
    }
};

module.exports = ProdutoController;


/* index: //mostra lista de produtos
show: //mostra detalhe de um produto
create: //enviar dados para adicionar um produto  */