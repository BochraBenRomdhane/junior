const { Product } = require("../Models/index")
module.exports = {
    CreateProduct: async (req, res) => {
        try {
            const { name, imageUrl, price, quantity, options, userId, categoryId } = req.body
            const product = await Product.create({
                name, imageUrl, price, quantity, options, userId, categoryId
            })
            res.status(200).send(product)
        } catch (err) {
            throw err
        }
    },
    getAll: async (req, res) => {
        try {
            const products = await Product.findAll()
            res.status(200).send(products)
        } catch (err) {
            res.status(400).send({ message: "refused" })
            throw err
        }
    },
    getAllByCategory: async (req, res) => {
        try {
            const products = await Product.findAll({ where: { categoryId: req.params.id } })
            res.status(200).send(products)
        } catch (err) {
            res.status(400).send({ message: "refused" })
            throw err
        }
    },
    OneProduct: async (req, res) => {
        try {
            const product = await Product.findByPk(req.params.id)
            res.status(200).send(product)
        } catch (err) {
            res.status(400).send({ message: "Not found" })
            throw err
        }
    },
    deleteOne: async (req, res) => {
        try {
            await Product.destroy({
                where: { id: req.params.id }
            })
            res.status(200).send({ message: "deleted successfully !!!" })
        } catch (err) {
            res.status(400).send({ error: err })
            throw err
        }
    },
    updateOne: async (req, res) => {
        try {
            const { name, imageUrl, price, quantity, options, userId, categoryId } = req.body
            await Product.update(
                { name, imageUrl, price, quantity, options, userId, categoryId },
                {
                    where: {
                        id: req.params.id
                    }
                }
            )
            res.status(200).send({ message: "updated!!!" })
        } catch (err) {
            res.status(400).send({ error: err })
            throw err
        }
    }

}