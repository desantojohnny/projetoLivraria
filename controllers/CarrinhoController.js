const db = require("../database/models/index");
const { Order } = require('../database/models');

const CarrinhoController = {
    index: async (req, res) => {
                
        let orders = await db.Order.findAll();

        
        return res.render("Code-carrinhoPasso1", {orders});
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
    
    }
    //     add: async (req, res) => {
            
    //          let {pagamento, data, client_id, book_id, quantidade} = req.body;
    //          const order = await db.Order.create({
    //             payment: pagamento,
    //             request_date: data,
    //             client_id: client_id,
    //             book_id: book_id,
    //             amount: quantidade
    //          })

    //          console.log(order);
    //          return res.render("logado", {order})
    //     }
};

module.exports = CarrinhoController;