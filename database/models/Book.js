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
        release_year: {
            type: dataTypes.DATE
        },
        price: {
            type: dataTypes.DECIMAL
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
        },
        sinopse: {
            type: dataTypes.STRING
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