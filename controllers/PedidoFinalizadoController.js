const db = require("../database/models/index");
const { Client } = require('../database/models');

const PedidoFinalizadoController = {
    index: async (req, res) => {

        if(req.session.client){
            let client = req.session.client
                console.log(client);

         let orderClient = await db.Client.findOne({
            where:{
                id: client.id}
            });

        
            return res.render("Code-pedidoFinalizado", {orderClient});
        }      
    }
};

module.exports = PedidoFinalizadoController;