module.exports = function(sequelize, dataTypes) {
    
    let alias = "Client";

    let cols = {
        id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
        },
        first_name: {
                type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        },
        adress: {
            type: dataTypes.STRING
        },
        CPF: {
            type: dataTypes.STRING
        },
        phone: {
            type: dataTypes.STRING
        },
        birthday: {
            type: dataTypes.DATE
        },
        email_login: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        client_id: {
            type: dataTypes.INTEGER
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