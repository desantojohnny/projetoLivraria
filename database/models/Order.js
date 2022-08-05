module.exports = function(sequelize, dataTypes) {
    
    let alias = "Order";

    let cols = {
        id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
        },
        payment: {
                type: dataTypes.STRING
        },
        request_date: {
            type: dataTypes.DATE
        },
        client_id: {
                type: dataTypes.INTEGER
    }
    };

    let config = {
        tablename: "orders",
        timestamps: false
    }
       
    let Order = sequelize.define(alias, cols, config);

    Order.associate = function(models){
        Order.hasMany(models.Client, {
            as: "clients",
            foreignKey: "client_id"
        });

        Order.belongsToMany(models.Book, {
            as: "books",
            through: "order_books",
            foreignKey: "order_id",
            otherKey: "book_id",
            timestamps: false
        })
    }
      
    return Order;
}