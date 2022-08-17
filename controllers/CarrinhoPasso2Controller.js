const db = require("../database/models/index");
const { Client } = require('../database/models');

const CarrinhoPasso2Controller = {
    index: async (req, res) => {

        if(req.session.client){
            let client = req.session.client
                console.log(client);

         let orderClient = await db.Client.findOne({
            where:{
                id: client.id}
            });

        
            return res.render("Code-carrinhoPasso0", {orderClient});
        }      
    }
    
};

module.exports = CarrinhoPasso2Controller;