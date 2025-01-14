const { Sequelize, DataTypes } = require("sequelize");

const Connection = new Sequelize("e_commerce", "root", "root", {
    dialect: "mysql",
    host: "localhost",
})
const textConnection = async () => {
    try {
        await Connection.authenticate();
        console.log('Connection has been established successfully with your database.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

textConnection()

const Product = require("./Product")(Connection, DataTypes)
const Category = require("./Category")(Connection, DataTypes);
const Admin = require("./Admin")(Connection, DataTypes);
Admin.hasMany(Product, { foreignKey: "adminId" });
Product.belongsTo(Admin, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    foreignKey: "adminId"
});
Category.hasMany(Product, { foreignKey: "categoryId" });
Product.belongsTo(Category, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    foreignKey: "categoryId"
});

// Connection.sync({ alter: true })

module.exports = {
    Product, Category, Admin
}





