module.exports = function(sequelize, dataTypes) {
    
    let alias = "Client";

    let cols = {
        id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
        },
        full_name: {
                type: dataTypes.STRING
        },
        adress: {
            type: dataTypes.STRING
        },
        CPF: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        phone: {
            type: dataTypes.STRING
        },
        bithday: {
            type: dataTypes.DATE
        },
        user_name: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        }
    };

    let config = {
        tablename: "clients",
        timestamps: false
    }

    let Client = sequelize.define(alias, cols, config);

    Client.associate = function(models){
        Client.hasMany(models.Order, {
            as: "orders",
            foreignKey: "client_id"
        });
    }

    return Client;
}