module.exports = function(sequelize, dataTypes) {
    
    let alias = "Book";

    let cols = {
        id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
        },
        title: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.DOUBLE
        },
        description: {
            type: dataTypes.STRING
        },
        pages: {
            type: dataTypes.INTEGER
        },
        url_image: {
            type: dataTypes.STRING
        },
        authors: {
            type: dataTypes.STRING
        },
        category: {
            type: dataTypes.STRING
        },
        editora: {
            type: dataTypes.STRING
        },
        ISBN: {
            type: dataTypes.INTEGER
        },
        estoque: {
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tablename: "books",
        timestamps: false
    }
       
    let Book = sequelize.define(alias, cols, config);
    
    Book.associate = function(models){
        Book.belongsToMany(models.Order, {
            as: "orders",
            through: "order_books",
            foreignKey: "book_id",
            otherKey: "order_id",
            timestamps: false
        })
    }
    
    return Book;
}