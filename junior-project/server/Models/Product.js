module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define(
        'Product',
        {
            name: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            imageUrl: {
                type: DataTypes.STRING(1000),
                allowNull: true,
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            options: {
                type: DataTypes.STRING,
                allowNull: true,
            }
        },
        { timestamps: false }
    )
    return Product
}

//defaultValue:"as u like"