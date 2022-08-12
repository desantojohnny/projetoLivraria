// const db = require("../database/models/index");
// const { Order } = require('../database/models');

// const CarrinhoController = {
//     index: (req, res) => {
//         return res.render('carrinhoPasso1');
//     },
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
//     },
// };

// module.exports = LoginController;