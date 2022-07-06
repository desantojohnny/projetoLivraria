const ProdutoController = {
    index: (req,res) => {
        return res.render('produto');
    }
};

module.exports = ProdutoController;


/* index: //mostra lista de produtos
show: //mostra detalhe de um produto
create: //enviar dados para adicionar um produto  */